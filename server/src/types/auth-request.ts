import type { Request } from "express";
import type { AuthObject } from "@clerk/express";

export interface AuthenticatedRequest extends Request {
	auth: AuthObject;
}
