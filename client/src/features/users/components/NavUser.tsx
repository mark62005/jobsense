"use client";

import type { TNavUserLink } from "./NavUserLink";

import { useClerk, useUser } from "@clerk/nextjs";

import {
	CircleUserRoundIcon,
	EllipsisVerticalIcon,
	LogOutIcon,
	SettingsIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import NavUserLink from "./NavUserLink";

interface UserInfoProps {
	userInfo: {
		name: string;
		email: string;
		imageUrl: string;
	};
}

function UserInfo({ userInfo }: UserInfoProps) {
	const { name, email, imageUrl } = userInfo;

	const nameInitials = name
		.split(" ")
		.slice(0, 2)
		.map((str: string) => str[0])
		.join("");

	return (
		<>
			<Avatar className="size-8 rounded-lg grayscale">
				<AvatarImage
					src={imageUrl}
					alt={name}
				/>
				<AvatarFallback className="rounded-lg uppercase">
					{nameInitials}
				</AvatarFallback>
			</Avatar>

			<div className="grid flex-1 text-left text-sm leading-tight">
				<span className="truncate font-medium">{name}</span>

				<span className="text-muted-foreground truncate text-xs">{email}</span>
			</div>
		</>
	);
}

function NavUser() {
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

	const { user, isLoaded } = useUser();

	function handleProfileClick() {
		openUserProfile();
		setOpenMobile(false);
	}

	if (!isLoaded) return <div>Loading user...</div>;
	if (!user || user === null) {
		return <div>Error fetching user.</div>;
	}

	const userInfo = {
		name: user.fullName ?? "",
		email: user.primaryEmailAddress?.emailAddress ?? "",
		imageUrl: user.imageUrl,
	};

	return (
		<SidebarMenuItem>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<SidebarMenuButton
						size="lg"
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<UserInfo userInfo={userInfo} />

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
							<UserInfo userInfo={userInfo} />
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
export default NavUser;
