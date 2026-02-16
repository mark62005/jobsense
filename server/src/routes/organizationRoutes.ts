import { Router } from "express";

import { requireAuth } from "../middlewares/require-auth";
import { withOrganization, withUser } from "../middlewares/chains";

import {
	createOrganization,
	getMyOrganization,
	getOrganizationById,
	updateMyOrganization,
} from "../controllers/organizationControllers";

const router = Router();

/* AUTH USER RELATED */
router.get("/me", ...withOrganization, getMyOrganization);
router.post("/", ...withUser, createOrganization);
router.patch("/me", ...withOrganization, updateMyOrganization);

router.get("/:id", requireAuth, getOrganizationById);

export default router;
