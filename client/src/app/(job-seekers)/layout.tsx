import type { WithChildrenProps } from "@/types/react";
import type { TSidebarNavLink } from "@/components/sidebar/SidebarNav";

import {
	BrainCircuitIcon,
	ClipboardListIcon,
	LayoutDashboardIcon,
} from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/AppSidebar";
import SidebarNav from "@/components/sidebar/SidebarNav";
import AppSidebarFooter from "@/components/sidebar/shared/AppSidebarFooter";
import NavUser from "@/features/users/components/nav/NavUser";
import SiteHeader from "@/components/shared/SiteHeader";

const CONTENT_NAV_LINKS_CONFIG: TSidebarNavLink[] = [
	{
		label: "Job Board",
		href: "/",
		icon: <ClipboardListIcon />,
	},
	{
		label: "AI Search",
		href: "/ai-search",
		icon: <BrainCircuitIcon />,
	},
	{
		label: "Employer Dashboard",
		href: "/employers",
		icon: <LayoutDashboardIcon />,
		authStatus: "signedIn",
	},
];

function JobSeekersMainLayout({ children }: WithChildrenProps) {
	return (
		<SidebarProvider>
			<AppSidebar
				contentNode={
					<SidebarNav
						navLinks={CONTENT_NAV_LINKS_CONFIG}
						className="mt-auto"
					/>
				}
				footerNode={<AppSidebarFooter item={<NavUser />} />}
			/>

			<SidebarInset>
				<SiteHeader />

				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
export default JobSeekersMainLayout;
