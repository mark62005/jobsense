import type { WithChildrenProps } from "@/types/react";
import type { TSidebarNavLink } from "@/components/shared/sidebar/SidebarNav";

import Link from "next/link";
import {
	BrainCircuitIcon,
	ClipboardListIcon,
	LayoutDashboardIcon,
	LogInIcon,
} from "lucide-react";
import {
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "@/components/ui/sidebar";
import {
	AppSignedIn,
	AppSignedOut,
} from "@/services/clerk/components/AuthStatuses";
import { SignInButton } from "@/services/clerk/components/AuthButtons";
import AppSidebar from "@/components/shared/sidebar/AppSidebar";
import SidebarNav from "@/components/shared/sidebar/SidebarNav";
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
	{
		label: "Sign In",
		href: "/sign-in",
		icon: <LogInIcon />,
		authStatus: "signedOut",
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
				footerNode={
					<>
						{/* SIGNED IN */}
						<AppSignedIn>
							<NavUser />
						</AppSignedIn>

						{/* SIGNED OUT */}
						<AppSignedOut>
							<SidebarMenu>
								<SidebarMenuItem>
									<SignInButton>
										<SidebarMenuButton asChild>
											<Link href="/sign-in">
												<LogInIcon />
												<span>Sign In</span>
											</Link>
										</SidebarMenuButton>
									</SignInButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</AppSignedOut>
					</>
				}
			/>

			<SidebarInset>
				<SiteHeader />

				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
export default JobSeekersMainLayout;
