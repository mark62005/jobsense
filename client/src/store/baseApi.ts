import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "@/features/auth/authToken";

const customBaseQuery = fetchBaseQuery({
	baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
	prepareHeaders: (headers) => {
		const token = getAuthToken();

		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

export const baseApi = createApi({
	baseQuery: customBaseQuery,
	reducerPath: "baseApi",
	tagTypes: [],
	endpoints: () => ({}),
});
