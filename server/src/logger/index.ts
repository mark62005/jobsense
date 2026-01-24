import { createLogger, format, transports } from "winston";
import "dotenv/config";

const { combine, timestamp, printf, colorize, errors, json, simple } = format;

const isProduction = process.env.NODE_ENV === "production";

const logFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
	const metaString =
		Object.keys(meta).length > 0 ? `\n${JSON.stringify(meta, null, 2)}` : "";

	return `${timestamp} ${level}: ${stack || message}${metaString}`;
});

export const logger = createLogger({
	level: process.env.LOGGER_LEVEL || "info",
	format: combine(
		colorize(),
		timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		errors({ stack: true }),
		logFormat,
	),
	transports: [
		new transports.Console({
			format: isProduction ? json() : format.combine(colorize(), simple()),
		}),
	],
});
