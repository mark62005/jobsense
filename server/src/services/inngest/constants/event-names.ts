export const CLERK_EVENTS = {
	USER: {
		CREATED: `clerk/user.created`,
		UPDATED: `clerk/user.updated`,
		DELETED: `clerk/user.deleted`,
	},
	ORGANIZATION: {
		CREATED: "clerk/organization.created",
		UPDATED: "clerk/organization.updated",
		DELETED: "clerk/organization.deleted",
	},
	ORGANIZATION_MEMBERSHIP: {
		CREATED: "clerk/organizationMembership.created",
		UPDATED: "clerk/organizationMembership.updated",
		DELETED: "clerk/organizationMembership.deleted",
	},
} as const;
