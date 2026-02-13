import type { TUser } from "./users.type";

import { baseApi } from "@/store/baseApi";

export const usersApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Fetch the auth user from database.
		 */
		getMe: builder.query<TUser, void>({
			query: () => "/users/me",
			providesTags: ["Me"],
		}),
	}),
});

export const { useGetMeQuery } = usersApi;
