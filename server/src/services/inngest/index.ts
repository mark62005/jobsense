import type { UserJSON, DeletedObjectJSON } from "@clerk/nextjs/server";

import { CLERK_EVENTS } from "./constants/event-names";

import { Inngest, EventSchemas } from "inngest";
import "dotenv/config";

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

	/** APP **/
	/* JOB LISTING APPLICATION */
	/* RESUME */
	/* EMAIL */
};

export const inngest = new Inngest({
	id: "jobsense",
	isDev: process.env.NODE_ENV !== "production",
	schemas: new EventSchemas().fromRecord<TEvents>(),
});
