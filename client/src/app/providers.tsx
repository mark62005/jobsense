"use client";

import type { WithChildrenProps } from "@/types/react";

import ClerkProvider from "@/services/clerk/ClerkProvider";
import StoreProvider from "@/store/provider";

function AppProviders({ children }: WithChildrenProps) {
	return (
		<ClerkProvider>
			<StoreProvider>{children}</StoreProvider>
		</ClerkProvider>
	);
}
export default AppProviders;
