import type { Request, Response, NextFunction } from "express";
import type { AuthenticatedRequest } from "../types/auth-request";

import { getAuth } from "@clerk/express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
	const auth = getAuth(req);

	if (!auth.userId) {
		return res.status(401).json({ status: 401, message: "Unauthorized" });
	}

	(req as AuthenticatedRequest).auth = auth;
	next();
}
