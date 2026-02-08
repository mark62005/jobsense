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
		const idStr = id as string;

		const organization = await prisma.organization.findUnique({
			where: {
				id: idStr,
			},
		});

		if (!organization) {
			logger.error("404 Organization not found.", {
				path: req.path,
				method: req.method,
			});

			return res.status(404).json({ message: "Organization not found." });
		}

		return res.json(req.user);
	} catch (error) {
		logger.error(`${error}`, {
			path: req.path,
			method: req.method,
		});

		return res.status(500).json({ message: "Error fetching organization." });
	}
}
