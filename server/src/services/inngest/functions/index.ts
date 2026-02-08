import { clerkCreateOrganization, clerkCreateUser } from "./clerk";

export const inngestFunctions = [
	/** CLERK **/
	/* USER */
	clerkCreateUser,
	/* ORGANIZATION */
	clerkCreateOrganization,
];
