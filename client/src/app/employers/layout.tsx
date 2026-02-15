import type { WithChildrenProps } from "@/types/react";
import type { TSidebarNavLink } from "@/components/sidebar/SidebarNav";

import { ClipboardListIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import {
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupLabel,
	SidebarInset,
	SidebarProvider,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/AppSidebar";
import SidebarNav from "@/components/sidebar/SidebarNav";
import AppSidebarFooter from "@/components/sidebar/shared/AppSidebarFooter";
import NavOrganization from "@/features/organizations/components/nav/NavOrganization";
import SiteHeader from "@/components/shared/SiteHeader";
import OrganizationGuard from "@/features/employers/components/OrganizationGuard";

const CONTENT_NAV_LINKS_CONFIG: TSidebarNavLink[] = [
	{
		label: "Job Board",
		href: "/",
		icon: <ClipboardListIcon />,
	},
];

function EmployersMainLayout({ children }: WithChildrenProps) {
	return (
		<OrganizationGuard>
			<SidebarProvider>
				<AppSidebar
					contentNode={
						<>
							<SidebarGroup>
								<SidebarGroupLabel>Job Listings</SidebarGroupLabel>

								<SidebarGroupAction
									title="Add Job Listting"
									asChild
								>
									<Link href="/employers/job-listings/new">
										<PlusIcon />{" "}
										<span className="sr-only">Add Job Listing</span>
									</Link>
								</SidebarGroupAction>
							</SidebarGroup>

							<SidebarNav
								navLinks={CONTENT_NAV_LINKS_CONFIG}
								className="mt-auto"
							/>
						</>
					}
					footerNode={<AppSidebarFooter item={<NavOrganization />} />}
				/>

				<SidebarInset>
					<SiteHeader />

					{children}
				</SidebarInset>
			</SidebarProvider>
		</OrganizationGuard>
	);
}
export default EmployersMainLayout;
