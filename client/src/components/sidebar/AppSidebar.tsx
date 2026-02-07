import type { ComponentProps, ReactNode } from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import AppLogo from "../shared/AppLogo";

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

type AppSidebarProps = {
	contentNode: ReactNode;
	footerNode: ReactNode;
} & ComponentProps<typeof Sidebar>;

function AppSidebar({ contentNode, footerNode, ...props }: AppSidebarProps) {
	return (
		<Sidebar
			collapsible="icon"
			variant="inset"
			{...props}
		>
			<AppSidebarHeader />

			<SidebarContent>{contentNode}</SidebarContent>

			{footerNode}
		</Sidebar>
	);
}
export default AppSidebar;
