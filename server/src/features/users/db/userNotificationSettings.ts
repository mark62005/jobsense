import { prisma } from "../../../services/prisma/client";

export async function insertUserNotificationSetting({
	userId,
}: {
	userId: string;
}): Promise<void> {
	await prisma.userNotificationSetting.upsert({
		where: {
			userId,
		},
		create: {
			userId,
		},
		update: {}, // Do nothing on conflict
	});
}
