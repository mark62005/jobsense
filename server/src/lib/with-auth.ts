import type { Request, Response, NextFunction, RequestHandler } from "express";
import type { AuthenticatedRequest } from "../types/auth-request";

export function withAuth(
	handler: (req: AuthenticatedRequest, res: Response) => unknown,
): RequestHandler {
	return (req: Request, res: Response, next: NextFunction) => {
		handler(req as AuthenticatedRequest, res);
	};
}
