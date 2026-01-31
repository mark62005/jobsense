import type { User, UserNotificationSetting } from "@/generated/prisma";

export type TUser = User;

export type TUserNotificationSetting = UserNotificationSetting;
export type TUserNotificationSettingPayload = Omit<
	TUserNotificationSetting,
	"createdAt" | "updatedAt"
>;
