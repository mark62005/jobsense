/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "@clerk/nextjs";

export const getAuthToken = async (): Promise<string | null> => {
	try {
		// This should be called from a React component context
		const { getToken } = useAuth();
		const token = await getToken();

		return token;
	} catch (error) {
		console.error("Error getting auth token:", error);
		return null;
	}
};
