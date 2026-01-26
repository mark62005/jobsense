import type { Metadata } from "next";
import type { WithChildrenProps } from "@/types/react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import AppProviders from "./providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "JobSense",
	description: "Helps candidates prepare the right resume for the right role.",
};

export default function RootLayout({ children }: Readonly<WithChildrenProps>) {
	return (
		<AppProviders>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					{children}
				</body>
			</html>
		</AppProviders>
	);
}
