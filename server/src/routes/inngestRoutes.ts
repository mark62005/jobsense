import { Router } from "express";
import { serve } from "inngest/express";
import { inngest } from "../services/inngest";
import { inngestFunctions } from "../services/inngest/functions";

const router = Router();

router.use(serve({ client: inngest, functions: inngestFunctions }));

export default router;
