import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export function UserInfoSkeleton() {
	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				size="lg"
				disabled
			>
				<Skeleton className="size-8 rounded-lg" />

				<div className="grid flex-1 gap-1">
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-3 w-32" />
				</div>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}

export function UserInfoError() {
	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				size="lg"
				disabled
			>
				<Avatar className="size-8 rounded-lg">
					<AvatarFallback className="rounded-lg">?</AvatarFallback>
				</Avatar>
				<div className="grid flex-1 text-left text-sm leading-tight">
					<span className="truncate font-medium text-destructive">
						Error loading user
					</span>
				</div>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}

interface UserInfoProps {
	user: {
		name: string;
		email: string;
		imageUrl: string;
	};
}

export function UserInfo({ user }: UserInfoProps) {
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
