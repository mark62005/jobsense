import type { Request, Response } from "express";

import { prisma } from "../services/prisma/client";
import { logger } from "../logger";

/**
 * GET /api/organizations/me
 *
 * Get the organization owned by current user
 */
export async function getMyOrganization(req: Request, res: Response) {
	try {
		if (!req.user) {
			logger.error("401 Unauthorized user."),
				{
					path: req.path,
					method: req.method,
				};

			return res.status(401).json({
				error: "Unauthorized user.",
				code: "UNAUTHORIZED",
			});
		}

		const organization = await prisma.organization.findUnique({
			where: {
				ownerId: req.user!.id,
			},
		});

		if (!organization) {
			logger.error("404 Organization not found.", {
				path: req.path,
				method: req.method,
			});

			return res.status(404).json({
				error: "Organization not found.",
				errorCode: "ORGANIZATION_NOT_FOUND",
			});
		}

		logger.info(`Organziation retrieved successfully.`);
		return res.json(organization);
	} catch (error) {
		logger.error(`${error}`, {
			path: req.path,
			method: req.method,
		});

		return res.status(500).json({ error: "Error fetching organization." });
	}
}

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
				errorCode: "ORGANIZATION_NOT_FOUND",
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

/**
 * POST /api/organizations
 *
 * Create organization for current user
 */
export async function createOrganization(req: Request, res: Response) {
	try {
		if (!req.user) {
			logger.error("401 Unauthorized user."),
				{
					path: req.path,
					method: req.method,
				};

			return res.status(401).json({
				error: "Unauthorized user.",
				code: "UNAUTHORIZED",
			});
		}

		// Check if user already has an organization
		const existingOrg = await prisma.organization.findUnique({
			where: { ownerId: req.user!.id },
		});

		if (existingOrg) {
			logger.error("Organization existed."),
				{
					path: req.path,
					method: req.method,
				};

			return res.status(400).json({
				error: "You already have an organization",
				code: "ORGANIZATION_EXISTS",
			});
		}

		const { name, imageUrl } = req.body;

		if (!name) {
			logger.error("Organization name is required."),
				{
					path: req.path,
					method: req.method,
				};
			return res.status(400).json({ error: "Organization name is required." });
		}

		const organization = await prisma.organization.create({
			data: {
				name,
				imageUrl: imageUrl ?? "",
				ownerId: req.user!.id,
			},
		});

		logger.info(`Organziation created successfully.`);
		return res.status(201).json(organization);
	} catch (error) {
		logger.error(`${error}`, {
			path: req.path,
			method: req.method,
		});

		return res.status(500).json({ error: "Error creating organization." });
	}
}

/**
 * PATCH /api/organizations/me
 * Update current user's organization
 */
export async function updateMyOrganization(req: Request, res: Response) {
	try {
		if (!req.user) {
			logger.error("401 Unauthorized user."),
				{
					path: req.path,
					method: req.method,
				};

			return res.status(401).json({
				error: "Unauthorized user.",
				code: "UNAUTHORIZED",
			});
		}

		// Check if the organization to updated exists
		const organization = await prisma.organization.findUnique({
			where: {
				ownerId: req.user!.id,
			},
		});

		if (!organization) {
			logger.error("404 Organization not found.", {
				path: req.path,
				method: req.method,
			});

			return res.status(404).json({
				error: "Organization not found.",
				errorCode: "ORGANIZATION_NOT_FOUND",
			});
		}

		const { name, imageUrl } = req.body;

		const updatedOrganization = await prisma.organization.update({
			where: {
				id: organization.id,
			},
			data: {
				...(name && { name }),
				...(imageUrl !== undefined && { imageUrl }),
			},
		});

		logger.info(`Organziation updated successfully.`);
		return res.status(201).json(updatedOrganization);
	} catch (error) {
		logger.error(`${error}`, {
			path: req.path,
			method: req.method,
		});

		return res.status(500).json({ error: "Error updating organization." });
	}
}
