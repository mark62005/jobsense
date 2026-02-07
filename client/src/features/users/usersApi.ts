import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
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

			// Retry on 404 (user not synced yet)
			extraOptions: {
				maxRetries: 3,
				backoff: (attempt: number): number => {
					// Exponential backoff: 1s, 2s, 4s
					return Math.min(1000 * Math.pow(2, attempt), 4000);
				},
			},

			// Custom error handling
			transformErrorResponse: (
				response: FetchBaseQueryError,
			): FetchBaseQueryError => {
				if (response.status === 404) {
					// User not synced yet for new sign up
					return {
						...response,
						data: {
							message: "Setting up your account...",
							retryable: true,
						},
					};
				}

				return response;
			},
		}),
	}),
});

export const { useGetMeQuery } = usersApi;
