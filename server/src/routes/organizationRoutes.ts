import { Router } from "express";

import { requireAuth } from "../middlewares/require-auth";
import { getOrganizationById } from "../controllers/organizationControllers";

const router = Router();

router.get("/:id", requireAuth, getOrganizationById);

export default router;
