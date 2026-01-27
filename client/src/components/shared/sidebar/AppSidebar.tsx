import type { ComponentProps } from "react";

import Link from "next/link";
import { LogInIcon } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import AppLogo from "../AppLogo";
import {
	AppSignedIn,
	AppSignedOut,
} from "@/services/clerk/components/AuthStatuses";
import NavUser from "@/features/users/components/NavUser";

function AppSidebarHeader() {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton
						asChild
						className="data-[slot=sidebar-menu-button]:p-1.5!"
					>
						<AppLogo />
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	);
}

function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			collapsible="icon"
			{...props}
		>
			<AppSidebarHeader />

			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<AppSignedOut>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="/sign-in">
										<LogInIcon />
										<span>Sign In</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</AppSignedOut>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>

			<AppSignedIn>
				<SidebarFooter>
					<NavUser />
				</SidebarFooter>
			</AppSignedIn>
		</Sidebar>
	);
}
export default AppSidebar;
