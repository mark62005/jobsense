"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { setAuthToken } from "../authToken";

function ClerkAuthTokenBridge() {
	const { getToken, isSignedIn } = useAuth();

	useEffect(() => {
		if (!isSignedIn) {
			setAuthToken(null);
			return;
		}

		let isMounted = true;

		async function syncToken() {
			const token = await getToken();
			if (isMounted) {
				setAuthToken(token);
			}
		}

		syncToken();

		return () => {
			isMounted = false;
		};
	}, [getToken, isSignedIn]);

	return null;
}
export default ClerkAuthTokenBridge;
