import type { Request, Response } from "express";

import { sendError } from "../utils/apiError";

export function errorHandler(err: any, req: Request, res: Response) {
	const statusCode = err.statusCode || 500;

	return sendError(
		res,
		{
			STATUS_CODE: statusCode,
			MESSAGE: statusCode === 500 ? "Internal server error" : err.message,
			CODE: "INTERNAL_SERVER_ERROR",
		},
		{
			path: req.path,
			method: req.method,
		},
	);
}
