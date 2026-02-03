"use client";

import type { ReactNode } from "react";
import type { INavLink } from "@/types/nav-link";

import { usePathname } from "next/navigation";

import Link from "next/link";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	AppSignedIn,
	AppSignedOut,
} from "@/services/clerk/components/AuthStatuses";

export type TSidebarNavLink = Omit<INavLink, "Icon"> & {
	icon: ReactNode;
	authStatus?: "signedOut" | "signedIn";
};

interface SidebarNavProps {
	navLinks: TSidebarNavLink[];
	className?: string;
}

function SidebarNav({ navLinks, className }: SidebarNavProps) {
	const pathname = usePathname();

	return (
		<SidebarGroup>
			<SidebarMenu>
				{navLinks.map((link) => {
					const { href, label, icon, authStatus } = link;

					const item: ReactNode = (
						<SidebarMenuItem key={authStatus ? null : href}>
							<SidebarMenuButton
								isActive={pathname === href}
								asChild
							>
								<Link
									href={href}
									className="capitalize"
								>
									{icon}
									{label}
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					);

					if (authStatus === "signedIn") {
						return <AppSignedIn key={href}>{item}</AppSignedIn>;
					}
					if (authStatus === "signedOut") {
						return <AppSignedOut key={href}>{item}</AppSignedOut>;
					}
					return item;
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}
export default SidebarNav;
