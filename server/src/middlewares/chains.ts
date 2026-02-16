import { attachOrganization } from "./attach-organization";
import { attachUser } from "./attach-user";
import { requireAuth } from "./require-auth";

export const withUser = [requireAuth, attachUser] as const;

export const withOrganization = [...withUser, attachOrganization] as const;
