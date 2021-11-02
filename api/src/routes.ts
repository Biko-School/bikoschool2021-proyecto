import { Router } from "express";
import { Request, Response } from "express";

export const routes1 = (db) => {
  const routes = Router();

  routes.get("/meme", (req: Request, res: Response) => {
    const memes = db.get("memes").take(50).value();

    res.status(200).json(memes);
  });

  return routes;
};
