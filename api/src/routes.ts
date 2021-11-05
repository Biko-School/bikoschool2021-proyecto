import { Router } from "express";
import { Request, Response } from "express";

export const routes = Router();

routes.get("/meme", (req: Request, res: Response) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50).value();
  const memes2 = memes.map((meme) => {
    return { identifier: meme.id };
  });
  res.status(200).json(memes2);
});

routes.post("/meme", (req: Request, res: Response) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50).value();
  //res.status(200).json(memes);
  res.send("<h1>POST</h1>");
});
