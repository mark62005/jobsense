"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useAppDispatch } from "@/store/hooks";
import { useGetMeQuery } from "@/features/users/usersApi";
import { useQueryWithRetry } from "../hooks/useQueryWithRetry";
import { clearUser, setAuthUser, setIsLoading } from "../authSlice";

function ClerkAuthTokenBridge() {
	const { isSignedIn, isLoaded } = useUser();
	const dispatch = useAppDispatch();

	// Only fetch user data if Clerk user is signed in
	const { data: backendUser, isLoading: isBackendLoading } = useQueryWithRetry(
		useGetMeQuery(undefined, {
			skip: !isLoaded || !isSignedIn,
		}),
		"USER_NOT_SYNCED",
	);

	useEffect(() => {
		if (!isLoaded || isBackendLoading) {
			dispatch(setIsLoading(true));
		}

		if (!isSignedIn) {
			dispatch(clearUser());
			return;
		}

		if (backendUser) {
			dispatch(setAuthUser(backendUser));
		}
	}, [isLoaded, isSignedIn, backendUser, dispatch]);

	return null;
}
export default ClerkAuthTokenBridge;
