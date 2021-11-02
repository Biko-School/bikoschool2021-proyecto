import { Router } from "express";
import { Request, Response } from "express";

export const routes = Router();

routes.get("/meme", (req: Request, res: Response) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50).value();
  res.status(200).json(memes);
});
