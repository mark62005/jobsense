import type { Organization } from "@/generated/prisma";

export type TOrganization = Organization;
export type TOrganizationPayload = Pick<TOrganization, "name" | "imageUrl">;
