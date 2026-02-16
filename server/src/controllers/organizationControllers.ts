import type { Request, Response } from "express";

import { prisma } from "../services/prisma/client";
import { logger } from "../logger";
import { ApiError, sendError } from "../utils/apiError";

/**
 * GET /api/organizations/me
 *
 * Get the organization owned by current user
 */
export async function getMyOrganization(req: Request, res: Response) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		if (!req.organization) {
			return ApiError.unauthorized(res, apiErrorOptions);
		}

		logger.info(`Organziation retrieved successfully.`);
		return res.json(req.organization);
	} catch (error) {
		return sendError(
			res,
			{
				STATUS_CODE: 500,
				MESSAGE: "Error fetching auth user's organization.",
				CODE: "FETCH_ORGANIZATION_ERROR",
			},
			apiErrorOptions,
		);
	}
}

/**
 * GET /api/organizations/:id
 *
 * Get specific organization details with organizationId
 */
export async function getOrganizationById(req: Request, res: Response) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		const { id } = req.params;
		const orgId = id as string;

		const organization = await prisma.organization.findUnique({
			where: {
				id: orgId,
			},
		});

		if (!organization) {
			return ApiError.organizationNotFound(res, apiErrorOptions);
		}

		logger.info(`Organziation retrieved successfully.`);
		return res.json(organization);
	} catch (error) {
		return sendError(
			res,
			{
				STATUS_CODE: 500,
				MESSAGE: "Error fetching organization.",
				CODE: "FETCH_ORGANIZATION_ERROR",
			},
			apiErrorOptions,
		);
	}
}

/**
 * POST /api/organizations
 *
 * Create organization for current user
 */
export async function createOrganization(req: Request, res: Response) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		if (!req.user) {
			return ApiError.unauthorized(res, apiErrorOptions);
		}

		// Check if user already has an organization
		const existingOrg = await prisma.organization.findUnique({
			where: { ownerId: req.user!.id },
		});

		if (existingOrg) {
			return ApiError.organizationExists(res, apiErrorOptions);
		}

		const { name, imageUrl } = req.body;

		if (!name) {
			return sendError(
				res,
				{
					STATUS_CODE: 400,
					MESSAGE: "Organization name is required.",
					CODE: "MISSING_ORGANIZATION_NAME",
				},
				apiErrorOptions,
			);
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
		return sendError(
			res,
			{
				STATUS_CODE: 500,
				MESSAGE: "Error creating organization.",
				CODE: "CREATE_ORGANIZATION_ERROR",
			},
			apiErrorOptions,
		);
	}
}

/**
 * PATCH /api/organizations/me
 * Update current user's organization
 */
export async function updateMyOrganization(req: Request, res: Response) {
	const apiErrorOptions = { path: req.path, method: req.method };

	try {
		if (!req.organization) {
			return ApiError.unauthorized(res, apiErrorOptions);
		}

		const { name, imageUrl } = req.body;

		const updatedOrganization = await prisma.organization.update({
			where: {
				id: req.organization.id,
			},
			data: {
				...(name && { name }),
				...(imageUrl !== undefined && { imageUrl }),
			},
		});

		logger.info(`Organziation updated successfully.`);
		return res.status(201).json(updatedOrganization);
	} catch (error) {
		return sendError(
			res,
			{
				STATUS_CODE: 500,
				MESSAGE: "Error updating organization.",
				CODE: "UPDATE_ORGANIZATION_ERROR",
			},
			apiErrorOptions,
		);
	}
}
