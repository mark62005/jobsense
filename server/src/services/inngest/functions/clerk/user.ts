import {
	CLERK_EVENTS,
	STEP_VERIFY_WEBHOOK,
	USER_ERRORS,
} from "../../constants";

import { NonRetriableError } from "inngest";
import { inngest } from "../..";
import { verifyWebhookOrThrow } from "../../utils/clerk";
import {
	insertUser,
	insertUserNotificationSetting,
} from "../../../../features/users/db";

export const clerkCreateUser = inngest.createFunction(
	{
		id: "clerk/create-db-user",
		name: "Clerk - Create DB User",
	},
	{
		event: CLERK_EVENTS.USER.CREATED,
	},
	async ({ event, step }) => {
		// Verify Webhook
		await step.run(STEP_VERIFY_WEBHOOK, async () => {
			await verifyWebhookOrThrow({
				raw: event.data.raw,
				headers: event.data.headers,
			});
		});

		// Create user in database
		const userId = await step.run("create-db-user", async () => {
			console.log("CREATING USER IN DATABASE>>>");

			const userData = event.data.data;

			const email = userData.email_addresses.find(
				(email) => email.id === userData.primary_email_address_id,
			);
			if (!email || email === null) {
				throw new NonRetriableError(USER_ERRORS.PRIMARY_EMAIL_NOT_FOUND);
			}

			const name = [userData.first_name, userData.last_name]
				.filter(Boolean)
				.join(" ");
			const fullName = `${name[0]} ${name[1]}`.trim();

			await insertUser({
				id: userData.id,
				name: fullName,
				email: email.email_address,
				imageUrl: userData.image_url,
				createdAt: new Date(userData.created_at),
				updatedAt: new Date(userData.updated_at),
			});

			return userData.id;
		});

		// Create user notification setting in database
		await step.run("create-db-user-notification-setting", async () => {
			console.log("CREATING USER NOTIF IN DATABASE>>>");
			await insertUserNotificationSetting({ userId });
		});
	},
);
