"use client";

import type { WithChildrenProps } from "@/types/react";

import ClerkProvider from "@/services/clerk/ClerkProvider";
import StoreProvider from "@/store/provider";
import UserSettingsBridge from "@/features/users/components/UserSettingsBridge";

function AppProviders({ children }: WithChildrenProps) {
	return (
		<ClerkProvider>
			<StoreProvider>
				<UserSettingsBridge />
				{children}
			</StoreProvider>
		</ClerkProvider>
	);
}
export default AppProviders;
