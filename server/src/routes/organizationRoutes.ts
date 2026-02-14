import { Router } from "express";

import { requireAuth } from "../middlewares/require-auth";
import { attachUser } from "../middlewares/attach-user";

import {
	createOrganization,
	getMyOrganization,
	getOrganizationById,
	updateMyOrganization,
} from "../controllers/organizationControllers";

const router = Router();

router.get("/:id", requireAuth, getOrganizationById);
/* AUTH USER RELATED */
router.get("/me", requireAuth, attachUser, getMyOrganization);
router.post("/", requireAuth, attachUser, createOrganization);
router.patch("/me", requireAuth, attachUser, updateMyOrganization);

export default router;
