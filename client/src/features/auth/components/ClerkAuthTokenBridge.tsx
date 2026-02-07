"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useAppDispatch } from "@/store/hooks";
import { useGetMeQuery } from "@/features/users/usersApi";
import { clearUser, setAuthUser, setIsLoading } from "../authSlice";

function ClerkAuthTokenBridge() {
	const dispatch = useAppDispatch();
	const { isSignedIn, isLoaded } = useUser();

	// Only fetch user data if Clerk user is signed in
	const { data: backendUser, isLoading: isBackendLoading } = useGetMeQuery(
		undefined,
		{
			skip: !isSignedIn, // Don't fetch if not signed in
		},
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
