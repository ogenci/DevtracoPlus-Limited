import type { IncomingMessage, ServerResponse } from "http";

async function loadHandler() {
	try {
		return (await import("../artifacts/api-server/dist/index.mjs")).default;
	} catch (err) {
		// Fallback to source file if the built dist artifact is not available.
		// This keeps local dev and direct TS deployments working.
		const mod = await import("../artifacts/api-server/src/serverless.ts");
		return mod.default ?? mod;
	}
}

export default async function (req: IncomingMessage, res: ServerResponse) {
	try {
		const handler = await loadHandler();
		return handler(req, res);
	} catch (err) {
		// Log the full error so Vercel shows stack traces in the function logs.
		// eslint-disable-next-line no-console
		console.error("Serverless handler init error:", err);
		res.statusCode = 500;
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify({ error: "Server initialization failed" }));
	}
}
