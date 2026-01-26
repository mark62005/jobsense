import type { WithChildrenProps } from "@/types/react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/sidebar/AppSidebar";
import SiteHeader from "@/components/shared/SiteHeader";

function MainLayout({ children }: WithChildrenProps) {
	return (
		<SidebarProvider>
			<AppSidebar variant="inset" />

			<SidebarInset>
				<SiteHeader />

				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
export default MainLayout;
