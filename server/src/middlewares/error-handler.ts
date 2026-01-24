import type { Request, Response, NextFunction } from "express";
import { logger } from "../logger";

export function errorHandler(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const statusCode = err.statusCode || 500;

	logger.error(err, {
		path: req.path,
		method: req.method,
	});

	res.status(statusCode).json({
		message: statusCode === 500 ? "Internal server error" : err.message,
	});
}
