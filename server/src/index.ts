import express from "express";
import cors from "cors";
import helmet from "helmet";
import { logger } from "./logger";
import { errorHandler } from "./middlewares/error-handler";

import "dotenv/config";
import { error } from "winston";

/* ROUTE IMPORTS */

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

/* ROUTES */
app.use("/test", async (req, res) => {
	logger.error("Testing error");

	throw new Error("Testing error");
});

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
