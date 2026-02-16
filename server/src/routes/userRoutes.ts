import { Router } from "express";

import { withUser } from "../middlewares/chains";
import { getCurrentAuthUser } from "../controllers/userControllers";

const router = Router();

router.get("/me", ...withUser, getCurrentAuthUser);

export default router;
