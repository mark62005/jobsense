import express from "express";
import cors from "cors";
import helmet from "helmet";
import { logger } from "./logger";
import { errorHandler } from "./middlewares/error-handler";
import { clerkMiddleware } from "@clerk/express";

import "dotenv/config";

/* ROUTE IMPORTS */
import inngestRoutes from "./routes/inngestRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

/* SECURITY */
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

/* CORS */
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	}),
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
