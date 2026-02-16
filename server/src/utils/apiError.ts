import type { CustomApiError } from "./constants/api-errors";

import { CUSTOM_API_ERRORS } from "./constants/api-errors";

import { Response } from "express";
import { logger } from "../logger";

interface ErrorOptions {
	path?: string;
	method?: string;
	log?: boolean;
}

export function sendError(
	res: Response,
	error: CustomApiError,
	options: ErrorOptions = {},
) {
	const { path, method, log = true } = options;

	if (log) {
		const context = { ...(path && { path }), ...(method && { method }) };
		logger.error(`${error.STATUS_CODE} ${error.MESSAGE}`, context);
	}

	return res.status(error.STATUS_CODE).json({
		error: error.MESSAGE,
		code: error.CODE,
	});
}

export const ApiError = {
	/* AUTH */
	unauthorized: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.AUTH.UNAUTHORIZED, options),
	noAuthToken: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.AUTH.NO_TOKEN, options),
	invalidAuthToken: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.AUTH.INVALID_TOKEN, options),
	noAuthUserId: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.AUTH.NO_AUTH_USER_ID, options),
	authTokenError: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.AUTH.TOKEN_ERROR, options),
	/* USER */
	userNotFound: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.USER.NOT_FOUND, options),
	userNotSynced: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.USER.NOT_SYNCED, options),
	/* ORGANIZATION */
	organizationNotFound: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.ORGANIZATION.NOT_FOUND, options),
	organizationExists: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.ORGANIZATION.ALREADY_EXISTS, options),
	/* JOB LISTING */
	jobListingNotFound: (res: Response, options?: ErrorOptions) =>
		sendError(res, CUSTOM_API_ERRORS.JOB_LISTING.NOT_FOUND, options),
};
