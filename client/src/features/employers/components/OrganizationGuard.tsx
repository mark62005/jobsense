"use client";

import type { WithChildrenProps } from "@/types/react";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGetMyOrganizationQuery } from "@/features/organizations/organizationsApi";

const ONBOARDING_PATH = "/employers/onboarding";

function OrganizationGuard({ children }: WithChildrenProps) {
	const pathname = usePathname();
	const router = useRouter();

	const {
		data: organization,
		isLoading,
		isError,
		error,
	} = useGetMyOrganizationQuery();

	const isOnboardingPage = pathname === ONBOARDING_PATH;
	const hasNoOrganization =
		!organization ||
		(isError && (error as any)?.data?.code === "ORGANIZATION_NOT_FOUND");

	useEffect(() => {
		if (isLoading || isOnboardingPage) return;

		if (hasNoOrganization) {
			router.push(
				`${ONBOARDING_PATH}?redirect=${encodeURIComponent(pathname)}`,
			);
		}
	}, [isLoading, hasNoOrganization, isOnboardingPage, pathname, router]);

	// Loading State
	if (isLoading) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="animate-spin rounded-full size-10 border-b-2 border-primary" />
			</div>
		);
	}

	// Redirecting to onboarding
	if (hasNoOrganization && !isOnboardingPage) {
		return null;
	}

	return <>{children}</>;
}
export default OrganizationGuard;
