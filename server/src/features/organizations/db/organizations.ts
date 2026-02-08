import { Prisma } from "../../../generated/prisma";
import { prisma } from "../../../services/prisma/client";

export async function insertOrganization(
	org: Prisma.OrganizationCreateInput,
): Promise<void> {
	await prisma.organization.upsert({
		where: {
			id: org.id,
		},
		create: org,
		update: {}, // Do nothing on conflict
	});
}
