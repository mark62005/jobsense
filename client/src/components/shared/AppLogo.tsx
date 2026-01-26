import type { WithOptionalClassNameProps } from "@/types/react";

import Link from "next/link";
import { EarthIcon } from "lucide-react";

function AppLogo({ className }: WithOptionalClassNameProps) {
	return (
		<Link
			href="/"
			className={className}
		>
			<EarthIcon className="size-5!" />
			<h1 className="text-base font-semibold">JobSense</h1>
		</Link>
	);
}
export default AppLogo;
