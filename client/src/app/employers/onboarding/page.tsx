"use client";

import type { FormEvent } from "react";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCreateOrganizationMutation } from "@/features/organizations/organizationsApi";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function EmployerOnboardingPage() {
	const router = useRouter();

	const searchParams = useSearchParams();
	const redirectUrl = searchParams.get("redirect") ?? "/employers";

	const [name, setName] = useState<string>("");

	const [createOrganization, { isLoading, isError, error }] =
		useCreateOrganizationMutation();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		try {
			await createOrganization({
				name: name.trim(),
				imageUrl: "",
			}).unwrap();

			router.push(redirectUrl);
		} catch (err) {
			console.error("Failed to create organization: ", err);
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>Set Up Your Organization</CardTitle>

					<CardDescription>
						Create your employer profile to start posting jobs
					</CardDescription>
				</CardHeader>

				<CardContent>
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div className="space-y-2">
							<Label htmlFor="name">Organization Name*</Label>

							<Input
								id="name"
								placeholder="Acme Inc"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>

						{isError && (
							<p className="text-sm text-destructive">
								{(error as any)?.data?.error || "Failed to create organization"}
							</p>
						)}

						<Button
							type="submit"
							className="w-full"
							disabled={isLoading || !name.trim()}
						>
							{isLoading ? "Creating..." : "Create Organization"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
export default EmployerOnboardingPage;
