import type {
	TUserNotificationSetting,
	TUserNotificationSettingPayload,
} from "./users.type";
import { baseApi } from "@/store/baseApi";

export const usersApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		/* AUTH USER SETTINGS */
		/**
		 * Fetch user notification settings of the auth user from database.
		 */
		getMe: builder.query<TUserNotificationSetting, void>({
			query: () => "/users/me/settings",
			providesTags: ["Me"],
		}),
		/**
		 * Update user notification settings of the auth user to database.
		 */
		updateMe: builder.mutation<
			TUserNotificationSetting,
			TUserNotificationSettingPayload
		>({
			query: (body) => ({
				url: "/users/me/settings",
				method: "PATCH",
				body,
			}),
			invalidatesTags: ["Me"],
		}),
	}),
});

export const { useGetMeQuery, useUpdateMeMutation } = usersApi;
