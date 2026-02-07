import type {
	UserJSON,
	DeletedObjectJSON,
	OrganizationJSON,
} from "@clerk/nextjs/server";

import { CLERK_EVENTS } from "./constants/event-names";

import { Inngest, EventSchemas } from "inngest";

interface IClerkWebhookData<T> {
	data: {
		data: T;
		headers: Record<string, string>;
		raw: string;
	};
}

type TEvents = {
	/** CLERK **/
	/* USER */
	[CLERK_EVENTS.USER.CREATED]: IClerkWebhookData<UserJSON>;
	[CLERK_EVENTS.USER.UPDATED]: IClerkWebhookData<UserJSON>;
	[CLERK_EVENTS.USER.DELETED]: IClerkWebhookData<DeletedObjectJSON>;
	/* ORGANIZATION */
	[CLERK_EVENTS.ORGANIZATION.CREATED]: IClerkWebhookData<OrganizationJSON>;
	[CLERK_EVENTS.ORGANIZATION.UPDATED]: IClerkWebhookData<OrganizationJSON>;
	[CLERK_EVENTS.ORGANIZATION.DELETED]: IClerkWebhookData<DeletedObjectJSON>;

	/** APP **/
	/* JOB LISTING APPLICATION */
	/* RESUME */
	/* EMAIL */
};

export const inngest = new Inngest({
	id: "jobsense",
	schemas: new EventSchemas().fromRecord<TEvents>(),
});
