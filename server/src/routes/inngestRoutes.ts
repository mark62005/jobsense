import { Router } from "express";
import { serve } from "inngest/express";
import { inngest } from "../services/inngest";
import { logger } from "../logger";
import { inngestFunctions } from "../services/inngest/functions";

const router = Router();

router.use((req, res, next) => {
	logger.info(`Inngest request: ${req.method} ${req.path}`);
	next();
});

const inngestHandler = serve({ client: inngest, functions: inngestFunctions });

router.get("/", inngestHandler);
router.post("/", inngestHandler);
router.put("/", inngestHandler);

export default router;
