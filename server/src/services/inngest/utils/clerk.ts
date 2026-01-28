import { NonRetriableError } from "inngest";
import { Webhook } from "svix";
import "dotenv/config";

export async function verifyWebhookOrThrow({
	raw,
	headers,
}: {
	raw: string;
	headers: Record<string, string>;
}) {
	try {
		const clerkWebhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

		await new Webhook(clerkWebhookSecret).verify(raw, headers);
	} catch {
		throw new NonRetriableError("Invalid webhook");
	}
}
