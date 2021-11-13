import { Request, Response, Router } from "express";

export let routes = Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.status(200).json(req.context.db.get("memes").take(50).value());
});
