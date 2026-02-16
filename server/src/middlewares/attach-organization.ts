import type { Request, Response, NextFunction } from "express";

import { prisma } from "../services/prisma/client";
import { ApiError, sendError } from "../utils/apiError";

export async function attachOrganization(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		if (!req.user) {
			return ApiError.unauthorized(res, { path: req.path, method: req.method });
		}

		/* TODO: In-memory cache organization object for enhancing performance */

		const organization = await prisma.organization.findUnique({
			where: { ownerId: req.user.id },
		});

		if (!organization) {
			return ApiError.organizationNotFound(res, {
				path: req.path,
				method: req.method,
			});
		}

		req.organization = organization;
		next();
	} catch (error) {
		return sendError(
			res,
			{
				STATUS_CODE: 500,
				MESSAGE: "Error attaching organization.",
				CODE: "ATTACH_ORGANIZATION_ERROR",
			},
			apiErrorOptions,
		);
	}
}
