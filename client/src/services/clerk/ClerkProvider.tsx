"use client";

import type { WithChildrenProps } from "@/types/react";

import { dark } from "@clerk/themes";
import { useIsDarkMode } from "@/hooks/ui/use-is-dark-mode";

import { ClerkProvider as ClerkProviderFromModule } from "@clerk/nextjs";

function ClerkProvider({ children }: WithChildrenProps) {
	const isDarkMode = useIsDarkMode();

	return (
		<ClerkProviderFromModule
			appearance={isDarkMode ? { baseTheme: [dark] } : undefined}
		>
			{children}
		</ClerkProviderFromModule>
	);
}
export default ClerkProvider;
