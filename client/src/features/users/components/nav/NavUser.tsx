"use client";

import type { TNavUserLink } from "./NavUserLink";

import { useClerk } from "@clerk/nextjs";
import { useGetMeQuery } from "../../usersApi";

import {
	CircleUserRoundIcon,
	EllipsisVerticalIcon,
	LogOutIcon,
	SettingsIcon,
} from "lucide-react";
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
import { UserInfo, UserInfoError, UserInfoSkeleton } from "./UserInfo";
import NavUserLink from "./NavUserLink";

function NavUserContent() {
	const NAV_USER_LINKS_CONFIG: TNavUserLink[] = [
		{
			Icon: CircleUserRoundIcon,
			label: "Profile",
			onNavLinkClick: handleProfileClick,
		},
		{
			Icon: SettingsIcon,
			label: "Settings",
			href: "/users/settings",
		},
	] as const;

	const { openUserProfile } = useClerk();
	const { isMobile, setOpenMobile } = useSidebar();

	const { data: user, isLoading, isError, error } = useGetMeQuery();

	function handleProfileClick() {
		openUserProfile();
		setOpenMobile(false);
	}

	if (isLoading || (!user && !isError)) {
		return <UserInfoSkeleton />;
	}

	if (isError || !user) {
		console.error("Error loading user: ", error);

		return <UserInfoError />;
	}

	return (
		<SidebarMenuItem>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<SidebarMenuButton
						size="lg"
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<UserInfo user={user} />

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
							<UserInfo user={user} />
						</div>
					</DropdownMenuLabel>

					<DropdownMenuSeparator />

					<DropdownMenuGroup>
						{NAV_USER_LINKS_CONFIG.map((link) => (
							<NavUserLink
								key={link.label}
								link={link}
							/>
						))}
					</DropdownMenuGroup>

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

function NavUser() {
	return (
		<ErrorBoundary
			fallback={<UserInfoError />}
			onError={(error) => console.error("NavUser error:", error)}
		>
			<NavUserContent />
		</ErrorBoundary>
	);
}
export default NavUser;
