import { Router } from "express";
import { Webhook } from "svix";
import { inngest } from "../services/inngest";
import { logger } from "../logger";
import "dotenv/config";

const router = Router();

router.post("/", async (req, res) => {
	logger.info("Clerk webhook received.");

	const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
	if (!webhookSecret) {
		throw new Error("CLERK_WEBHOOK_SECRET is required.");
	}

	// Get Svix headers
	const svix_id = req.headers["svix-id"] as string;
	const svix_timestamp = req.headers["svix-timestamp"] as string;
	const svix_signature = req.headers["svix-signature"] as string;

	if (!svix_id || !svix_timestamp || !svix_signature) {
		return res.status(400).json({ error: "Missing svix headers" });
	}

	const body = req.body.toString("utf8");

	// Verify webhook
	const wh = new Webhook(webhookSecret);
	let evt: any;

	try {
		evt = wh.verify(body, {
			"svix-id": svix_id,
			"svix-timestamp": svix_timestamp,
			"svix-signature": svix_signature,
		});
		logger.info("Webhook verified.");
	} catch (err) {
		logger.error("Error verifying webhook: " + err);
		return res.status(400).json({ error: "Error verifying webhook." });
	}

	const eventType = evt.type;

	logger.info(`✅ Clerk webhook received: ${eventType}`);

	try {
		await inngest.send({
			name: eventType, // e.g., "organization.created"
			data: {
				data: evt.data,
				headers: {
					"svix-id": svix_id,
					"svix-timestamp": svix_timestamp,
					"svix-signature": svix_signature,
				},
				raw: body,
			},
		});

		logger.info(`✅ Event sent to Inngest: ${eventType}`);
	} catch (error) {
		logger.error(`Failed to send event to Inngest: ${error}`);
		return res.status(500).json({ error: "Failed to process webhook" });
	}

	return res.status(200).json({ message: "Webhook processed." });
});

export default router;
