import type { WithChildrenProps } from "@/types/react";

import { Suspense } from "react";
import {
	SignedOut as ClerkSignedOut,
	SignedIn as ClerkSignedIn,
} from "@clerk/nextjs";

export function AppSignedOut({ children }: WithChildrenProps) {
	return (
		<Suspense>
			<ClerkSignedOut>{children}</ClerkSignedOut>
		</Suspense>
	);
}

export function AppSignedIn({ children }: WithChildrenProps) {
	return (
		<Suspense>
			<ClerkSignedIn>{children}</ClerkSignedIn>
		</Suspense>
	);
}
