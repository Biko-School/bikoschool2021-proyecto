import LowdbMemeRepository from "core/infrastructure/LowdbMemeRepository";
import { Request, Response, Router } from "express";
import getSomeMemes from "./core/services/GetSomeMemes";

export let routes = Router();
routes.get("/memes", (req: Request, res: Response) => {
  const repo = new LowdbMemeRepository(req.context.db);
  res.status(200).json(getSomeMemes(repo, 50));
});