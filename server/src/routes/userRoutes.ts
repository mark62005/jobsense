import { Router } from "express";

import { requireAuth } from "../middlewares/require-auth";
import { attachUser } from "../middlewares/attach-user";

import { getCurrentAuthUser } from "../controllers/userControllers";

const router = Router();

router.get("/me", requireAuth, attachUser, getCurrentAuthUser);

export default router;
