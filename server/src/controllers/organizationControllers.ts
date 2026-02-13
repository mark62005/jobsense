import type { Request, Response } from "express";

import { prisma } from "../services/prisma/client";
import { logger } from "../logger";

/**
 * GET /api/organizations/:id
 *
 * Get specific organization details with organizationId
 */
export async function getOrganizationById(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const orgId = id as string;

		const organization = await prisma.organization.findUnique({
			where: {
				id: orgId,
			},
		});

		if (!organization) {
			logger.error("404 Organization not found.", {
				path: req.path,
				method: req.method,
			});

			return res.status(404).json({
				error: "Organization not found.",
				errorCode: "NO_ORGANIZATION",
			});
		}

		logger.info(`Organziation retrieved successfully.`);
		return res.json(organization);
	} catch (error) {
		logger.error(`${error}`, {
			path: req.path,
			method: req.method,
		});

		return res.status(500).json({ message: "Error fetching organization." });
	}
}
