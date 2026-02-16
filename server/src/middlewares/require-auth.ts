import type { Request, Response, NextFunction } from "express";
import type { User, Organization } from "../generated/prisma";

import { getAuth } from "@clerk/express";
import { ApiError, sendError } from "../utils/apiError";

declare global {
	namespace Express {
		interface Request {
			auth?: {
				userId: string; // Clerk user ID
				sessionId: string;
			};
			user?: User;
			organization?: Organization;
		}
	}
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return ApiError.noAuthToken(res, apiErrorOptions);
		}

		const auth = getAuth(req);
		if (!auth.userId) {
			return ApiError.invalidAuthToken(res, apiErrorOptions);
		}

		// Attach auth info to request
		req.auth = {
			userId: auth.userId,
			sessionId: auth.sessionClaims.sid as string,
		};

		next();
	} catch (error) {
		return sendError(
			res,
			{
				STATUS_CODE: 401,
				MESSAGE: "Unauthorized - Error verifying token.",
				CODE: "UNAUTHORIZED",
			},
			apiErrorOptions,
		);
	}
}
