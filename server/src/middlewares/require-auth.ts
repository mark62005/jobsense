import type { Request, Response, NextFunction } from "express";
import type { User } from "../generated/prisma";

import { getAuth } from "@clerk/express";
import { logger } from "../logger";

declare global {
	namespace Express {
		interface Request {
			auth?: {
				userId: string; // Clerk user ID
				sessionId: string;
			};
			user?: User;
			// For organization-scoped requests
			organizationMembership?: {
				organizationId: string;
				role: "admin" | "member";
			};
		}
	}
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			logger.error("Unauthorized - No token provided.", {
				path: req.path,
				method: req.method,
			});

			return res.status(401).json({
				error: "Unauthorized - No token provided.",
				code: "NO_AUTH_TOKEN",
			});
		}

		const auth = getAuth(req);

		if (!auth.userId) {
			logger.error("Unauthorized - Invalid token.", {
				path: req.path,
				method: req.method,
			});

			return res.status(401).json({ error: "Unauthorized - Invalid token." });
		}

		// Attach auth info to request
		req.auth = {
			userId: auth.userId,
			sessionId: auth.sessionClaims.sid as string,
		};

		next();
	} catch (error) {
		logger.error("Unauthorized - Error verifying token. " + error, {
			path: req.path,
			method: req.method,
		});

		return res
			.status(401)
			.json({ error: "Unauthorized - Error verifying token." });
	}
}
