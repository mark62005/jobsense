import type { TOrganization, TOrganizationPayload } from "./organizations.type";

import { baseApi } from "@/store/baseApi";

export const organizationsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		/**
		 * Fetch current user's organization
		 */
		getMyOrganization: builder.query<TOrganization, void>({
			query: () => "/organizations/me",
			providesTags: ["Organization"],
		}),
		/**
		 * Create a new organization
		 */
		createOrganization: builder.mutation<TOrganization, TOrganizationPayload>({
			query: (data) => ({
				url: "/organizations",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Organization"],
		}),
		/**
		 * Update current user's organization
		 */
		updateOrganization: builder.mutation<TOrganization, TOrganizationPayload>({
			query: (data) => ({
				url: "/organizations/me",
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["Organization"],
		}),
	}),
});

export const {
	useGetMyOrganizationQuery,
	useCreateOrganizationMutation,
	useUpdateOrganizationMutation,
} = organizationsApi;
