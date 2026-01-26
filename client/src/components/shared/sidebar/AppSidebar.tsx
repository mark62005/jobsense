import { Suspense, type ComponentProps } from "react";

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
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
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
						<Suspense>
							<SignedOut>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link href="/sign-in">
											<LogInIcon />
											<span>Sign In</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SignedOut>
						</Suspense>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
export default AppSidebar;
