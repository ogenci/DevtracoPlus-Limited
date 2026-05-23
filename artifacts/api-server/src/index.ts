import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"];

if (rawPort) {
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  app.listen(port, (err) => {
    if (err) {
      logger.error({ err }, "Error listening on port");
      process.exit(1);
    }

    logger.info({ port }, "Server listening");
  });
} else {
  // In serverless environments (e.g. Vercel) there is no long-running listener.
  // Export the Express app so the platform can handle requests using the
  // serverless function handler. Avoid throwing here to prevent startup
  // crashes when `PORT` is not provided.
  logger.info("No PORT provided; running in serverless mode (app exported)");
}

export default app;
