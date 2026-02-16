import type { Request, Response, NextFunction } from "express";

import { prisma } from "../services/prisma/client";
import { ApiError, sendError } from "../utils/apiError";

export async function attachUser(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		if (!req.auth?.userId) {
			return ApiError.noAuthUserId(res, apiErrorOptions);
		}

		const userId = req.auth.userId;

		/* TODO: In-memory cache user object for enhancing performance */

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!user) {
			return ApiError.userNotSynced(res, apiErrorOptions);
		}

		req.user = user;
		next();
	} catch (error) {
		return sendError(
			res,
			{
				STATUS_CODE: 500,
				MESSAGE: "Error attaching user.",
				CODE: "ATTACH_USER_ERROR",
			},
			apiErrorOptions,
		);
	}
}
