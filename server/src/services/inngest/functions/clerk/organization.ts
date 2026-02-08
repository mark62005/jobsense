import { CLERK_EVENTS, STEP_VERIFY_WEBHOOK } from "../../constants";

import { inngest } from "../..";
import { logger } from "../../../../logger";
import { verifyWebhookOrThrow } from "../../utils/clerk";
import { insertOrganization } from "../../../../features/organizations/db";

export const clerkCreateOrganization = inngest.createFunction(
	{
		id: "clerk/create-db-organization",
		name: "Clerk - Create DB Organization",
		retries: 3,
	},
	{
		event: CLERK_EVENTS.ORGANIZATION.CREATED,
	},
	async ({ event, step }) => {
		await step.run(STEP_VERIFY_WEBHOOK, async () => {
			await verifyWebhookOrThrow({
				raw: event.data.raw,
				headers: event.data.headers,
			});
		});

		try {
			await step.run("create-db-organization", async () => {
				const orgData = event.data.data;

				await insertOrganization({
					id: orgData.id,
					name: orgData.name,
					imageUrl: orgData.image_url || "",
					createdAt: new Date(orgData.created_at),
					updatedAt: new Date(orgData.updated_at),
				});

				logger.info(
					`Organization: ${orgData.id} has been created successfully.`,
				);
			});

			logger.info("Organization synced successfully", {
				orgId: event.data.data.id,
			});
		} catch (error) {
			logger.error("Failed to sync organization from Clerk", {
				orgId: event.data.data.id,
				error: error,
			});

			throw error;
		}
	},
);
