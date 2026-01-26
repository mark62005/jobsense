import type { WithChildrenProps } from "@/types/react";

import ClerkProvider from "@/services/clerk/ClerkProvider";

function AppProviders({ children }: WithChildrenProps) {
	return <ClerkProvider>{children}</ClerkProvider>;
}
export default AppProviders;
