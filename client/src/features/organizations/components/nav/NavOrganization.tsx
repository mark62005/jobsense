"use client";

import type { TNavOrganizationLink } from "./NavOrganizationLink";

import { useUser } from "@clerk/nextjs";
import { useQueryWithRetry } from "@/features/auth/hooks/useQueryWithRetry";
import { useGetMeQuery } from "@/features/users/usersApi";
import { useGetMyOrganizationQuery } from "../../organizationsApi";

import {
	ArrowLeftRightIcon,
	Building2Icon,
	CreditCardIcon,
	EllipsisVerticalIcon,
	LogOutIcon,
	UserRoundCogIcon,
} from "lucide-react";
import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@/services/clerk/components/AuthButtons";
import {
	EntityInfo,
	EntityInfoSkeleton,
	EntityInfoError,
} from "@/components/sidebar/shared/EntityInfo";
import NavOrganizationLink from "./NavOrganizationLink";

function NavOrganizationContent() {
	const NAV_ORGANIZATION_LINKS_CONFIG: TNavOrganizationLink[] = [
		{
			Icon: Building2Icon,
			label: "Manage Organization",
			onNavLinkClick: handleProfileClick,
		},
		{
			Icon: UserRoundCogIcon,
			label: "User Settings",
			href: "/employers/user-settings",
		},

		{
			Icon: CreditCardIcon,
			label: "Change Plan",
			href: "/employers/pricing",
		},
	] as const;

	const { isLoaded, isSignedIn } = useUser();
	const { isMobile, setOpenMobile } = useSidebar();

	const {
		data: user,
		isLoading: isUserLoading,
		isSyncing: isUserSyncing,
		isError: isUserError,
	} = useQueryWithRetry(
		useGetMeQuery(undefined, {
			skip: !isLoaded || !isSignedIn,
		}),
		"USER_NOT_SYNCED",
	);
	const {
		data: organization,
		isLoading: isOrganizationLoading,
		isError: isOrganizationError,
		error: organizationError,
	} = useGetMyOrganizationQuery();

	function handleProfileClick() {
		// TODO: Update organization profile feature
		setOpenMobile(false);
	}

	if (
		isUserLoading ||
		isUserSyncing ||
		(!user && !isUserError) ||
		isOrganizationLoading ||
		(!organization && !isOrganizationError)
	) {
		return <EntityInfoSkeleton />;
	}

	if (isUserError || !user || isOrganizationError || !organization) {
		console.error("Error loading organization: ", organizationError);

		return <EntityInfoError variant="organization" />;
	}

	const userInfo = {
		name: organization?.name ?? "Org name",
		email: user.email,
		imageUrl: organization?.imageUrl ?? "",
	};

	return (
		<SidebarMenuItem>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<SidebarMenuButton
						size="lg"
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<EntityInfo {...userInfo} />

						<EllipsisVerticalIcon className="ml-auto size-4" />
					</SidebarMenuButton>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
					side={isMobile ? "bottom" : "right"}
					align="end"
					sideOffset={4}
				>
					<DropdownMenuLabel className="p-0 font-normal">
						<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
							<EntityInfo {...userInfo} />
						</div>
					</DropdownMenuLabel>

					<DropdownMenuSeparator />

					<DropdownMenuGroup>
						{NAV_ORGANIZATION_LINKS_CONFIG.map((link) => (
							<NavOrganizationLink
								key={link.label}
								link={link}
							/>
						))}
					</DropdownMenuGroup>

					{/* TODO: Switch Organizations feature */}
					<DropdownMenuSeparator />

					<DropdownMenuItem
						className="cursor-pointer"
						asChild
					>
						<Link href="/organizations/select">
							<ArrowLeftRightIcon className="mr-1" /> Switch Organizations
						</Link>
					</DropdownMenuItem>

					<DropdownMenuSeparator />

					<SignOutButton>
						<DropdownMenuItem className="cursor-pointer">
							<LogOutIcon />
							Log out
						</DropdownMenuItem>
					</SignOutButton>
				</DropdownMenuContent>
			</DropdownMenu>
		</SidebarMenuItem>
	);
}

function NavOrganization() {
	return (
		<ErrorBoundary
			fallback={<EntityInfoError variant="organization" />}
			onError={(error) => console.error("NavOrganization error:", error)}
		>
			<NavOrganizationContent />
		</ErrorBoundary>
	);
}
export default NavOrganization;
