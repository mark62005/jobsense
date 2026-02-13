import type { Request, Response } from "express";

import { logger } from "../logger";

/**
 * GET /api/users/me
 *
 * Get current authenticated user
 * This is the endpoint your frontend's useGetMeQuery() calls
 */
export async function getCurrentAuthUser(req: Request, res: Response) {
	try {
		if (!req.user) {
			logger.error(`User has not been attached.`, {
				path: req.path,
				method: req.method,
			});

			return res.status(404).json({
				error: "User not found",
				code: "USER_NOT_SYNCED",
			});
		}

		return res.json(req.user);
	} catch (error) {
		logger.error(`${error}`, {
			path: req.path,
			method: req.method,
		});

		return res.status(500).json({ message: "Error fetching current user." });
	}
}
