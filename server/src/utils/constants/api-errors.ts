export interface CustomApiError {
	STATUS_CODE: number;
	MESSAGE: string;
	CODE: string;
}

type ApiErrorGroup = Record<string, CustomApiError>;
type CustomApiErrors = Record<string, ApiErrorGroup>;

export const CUSTOM_API_ERRORS = {
	AUTH: {
		UNAUTHORIZED: {
			STATUS_CODE: 401,
			MESSAGE: "Unauthorized.",
			CODE: "UNAUTHORIZED",
		},
		NO_TOKEN: {
			STATUS_CODE: 401,
			MESSAGE: "Unauthorized - No auth token provided.",
			CODE: "NO_AUTH_TOKEN",
		},
		INVALID_TOKEN: {
			STATUS_CODE: 401,
			MESSAGE: "Unauthorized - Invalid token.",
			CODE: "INVALID_TOKEN",
		},
		NO_AUTH_USER_ID: {
			STATUS_CODE: 401,
			MESSAGE: "Unauthorized - No auth user ID.",
			CODE: "NO_AUTH_USER_ID",
		},
		TOKEN_ERROR: {
			STATUS_CODE: 500,
			MESSAGE: "Auth token error.",
			CODE: "AUTH_TOKEN_ERROR",
		},
	},
	USER: {
		NOT_FOUND: {
			STATUS_CODE: 404,
			MESSAGE: "User not found.",
			CODE: "USER_NOT_FOUND",
		},
		NOT_SYNCED: {
			STATUS_CODE: 404,
			MESSAGE: "User not synced from Clerk yet.",
			CODE: "USER_NOT_SYNCED",
		},
	},
	ORGANIZATION: {
		NOT_FOUND: {
			STATUS_CODE: 404,
			MESSAGE: "Organization not found.",
			CODE: "ORGANIZATION_NOT_FOUND",
		},
		NOT_SYNCED: {
			STATUS_CODE: 404,
			MESSAGE: "Organization not synced from Clerk yet.",
			CODE: "ORGANIZATION_NOT_SYNCED",
		},
		ALREADY_EXISTS: {
			STATUS_CODE: 400,
			MESSAGE: "Organization already exists.",
			CODE: "ORGANIZATION_EXISTS",
		},
	},
	JOB_LISTING: {
		NOT_FOUND: {
			STATUS_CODE: 404,
			MESSAGE: "Job listing not found.",
			CODE: "JOB_LISTING_NOT_FOUND",
		},
	},
	GENERAL: {
		FORBIDDEN: {
			STATUS_CODE: 403,
			MESSAGE: "Forbidden.",
			CODE: "FORBIDDEN",
		},
		INTERNAL_SERVER_ERROR: {
			STATUS_CODE: 500,
			MESSAGE: "Internal server error.",
			CODE: "INTERNAL_SERVER_ERROR",
		},
	},
} satisfies CustomApiErrors;
