import type { ReactNode } from "react";

import Link from "next/link";
import { LogInIcon } from "lucide-react";
import {
	SidebarFooter,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	AppSignedIn,
	AppSignedOut,
} from "@/services/clerk/components/AuthStatuses";
import { SignInButton } from "@/services/clerk/components/AuthButtons";

interface AppSidebarFooterProps {
	item: ReactNode;
}

function AppSidebarFooter({ item }: AppSidebarFooterProps) {
	return (
		<SidebarFooter>
			<SidebarMenu>
				{/* SIGNED IN */}
				<AppSignedIn>{item}</AppSignedIn>

				{/* SIGNED OUT */}
				<AppSignedOut>
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
				</AppSignedOut>
			</SidebarMenu>
		</SidebarFooter>
	);
}
export default AppSidebarFooter;
