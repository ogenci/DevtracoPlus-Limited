import type { Request, Response } from "express";

// Dynamically import the serverless handler at request time. This prevents
// initialization-time errors from crashing the function without a stacktrace
// in Vercel logs. Any import/runtime error will be logged and a 500 returned.
export default async function (req: Request, res: Response) {
	try {
		const mod = await import("../artifacts/api-server/src/serverless");
		const handler = mod.default ?? mod;
		return handler(req, res);
	} catch (err) {
		// Log the full error so Vercel shows stack traces in the function logs.
		// This helps us identify the exact module/import causing the `ERR_UNSUPPORTED_DIR_IMPORT`.
		// eslint-disable-next-line no-console
		console.error("Serverless handler init error:", err);
		res.status(500).json({ error: "Server initialization failed" });
	}
}
