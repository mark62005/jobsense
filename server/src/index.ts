import express from "express";
import cors from "cors";
import helmet from "helmet";
import { logger } from "./logger";
import { errorHandler } from "./middlewares/error-handler";
import { clerkMiddleware } from "@clerk/express";

import "dotenv/config";

/* ROUTE IMPORTS */
import clerkWebhookRoutes from "./routes/clerkWebhookRoutes";
import inngestRoutes from "./routes/inngestRoutes";
import userRoutes from "./routes/userRoutes";
import organizationRoutes from "./routes/organizationRoutes";

const app = express();

/* SECURITY */
// app.use(helmet());
app.use(
	helmet({
		contentSecurityPolicy: false, // Disable CSP for development
	}),
);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

/* CORS */
app.use(
	cors({
		origin: [
			process.env.CLIENT_URL ?? "",
			"http://localhost:8288",
			"sigrid-bulbiferous-botfly.ngrok-free.dev",
		],
		credentials: true,
	}),
);

/* CLERK WEBHOOK */
app.use(
	"/api/webhooks/clerk",
	express.raw({ type: "application/json" }), // Raw body
	clerkWebhookRoutes,
);

/* BODY PARSING */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* CLERK */
app.use(clerkMiddleware());

/* INNGEST ROUTES */
app.use("/api/inngest", inngestRoutes);

/* ROUTES */
app.use("/api/users", userRoutes);
app.use("/api/organizations", organizationRoutes);

/* ERROR HANDLING */
app.use(errorHandler);

/* SERVER START */
const port = Number(process.env.PORT || "8000");
const server = app.listen(port, "0.0.0.0", () => {
	logger.info(`Server running on port ${port}`);
});

/* GRACEFUL SHUTDOWN */
process.on("SIGINT", () => {
	logger.info("SIGINT received, shutting down server...");
	server.close(() => process.exit(0));
});

process.on("SIGTERM", () => {
	logger.info("SIGTERM received, shutting down server...");
	server.close(() => process.exit(0));
});
