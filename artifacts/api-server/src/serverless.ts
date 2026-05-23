import app from "./app.js";
import type { Request, Response } from "express";

// Export a default handler so serverless platforms (Vercel) can invoke the
// Express app directly. Vercel will call the default export with (req, res).
export default function handler(req: Request, res: Response) {
  return (app as unknown as (req: Request, res: Response) => void)(req, res);
}
