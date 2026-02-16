import type { Request, Response } from "express";

import { ApiError, sendError } from "../utils/apiError";

/**
 * GET /api/users/me
 *
 * Get current authenticated user
 * This is the endpoint your frontend's useGetMeQuery() calls
 */
export async function getCurrentAuthUser(req: Request, res: Response) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		if (!req.user) {
			return ApiError.userNotSynced(res, apiErrorOptions);
		}

		return res.json(req.user);
	} catch (error) {
		return sendError(res, {
			STATUS_CODE: 500,
			MESSAGE: "Error fetching current auth user.",
			CODE: "FETCH_USER_ERROR",
		});
	}
}
