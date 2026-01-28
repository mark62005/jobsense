import { Prisma } from "../../../generated/prisma";
import { prisma } from "../../../services/prisma/client";

export async function insertUser(user: Prisma.UserCreateInput): Promise<void> {
	await prisma.user.upsert({
		where: {
			id: user.id,
		},
		create: user,
		update: {}, // Do nothing on conflict
	});
}
