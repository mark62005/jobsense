"use client";

import type { User } from "@/types/prisma";
import type { TNavUserLink } from "./NavUserLink";

import { useClerk } from "@clerk/nextjs";

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
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import NavUserLink from "./NavUserLink";
import { SignOutButton } from "@/services/clerk/components/AuthButtons";

const user = {
	name: "shadcn",
	email: "m@example.com",
	avatar: "/avatars/shadcn.jpg",
};

interface UserInfoProps {
	user: User;
}

function UserInfo({ user }: UserInfoProps) {
	const { name, email, imageUrl } = user;

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
	const { openUserProfile } = useClerk();
	const { isMobile, setOpenMobile } = useSidebar();

	function handleProfileClick() {
		openUserProfile();
		setOpenMobile(false);
	}

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

	return (
		<SidebarMenu>
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
		</SidebarMenu>
	);
}
export default NavUser;
