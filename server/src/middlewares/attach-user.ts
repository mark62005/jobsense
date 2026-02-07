import type { Request, Response, NextFunction } from "express";

import { prisma } from "../services/prisma/client";
import { logger } from "../logger";

export async function attachUser(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		if (!req.auth?.userId) {
			logger.error("Unauthorized - user ID missing.", {
				path: req.path,
				method: req.method,
			});
			return res.status(401).json({ error: "Unauthorized - user ID missing." });
		}

		const userId = req.auth.userId;

		/* TODO: In-memory cache user object for enhancing performance */

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!user) {
			logger.error("User not synced from Clerk.", {
				path: req.path,
				method: req.method,
			});
			return res.status(404).json({
				error: "Account setup in progress. Please try again in a moment.",
				code: "USER_NOT_SYNCED",
			});
		}

		req.user = user;
		next();
	} catch (error) {
		logger.error("Error attaching user: " + error, {
			path: req.path,
			method: req.method,
		});
		return res.status(500).json({ error: "Error attaching user." });
	}
}
