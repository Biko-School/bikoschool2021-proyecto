import LowdbMemeRepository from "./core/infrastructure/LowdbMemeRepository";
import { Request, Response, Router } from "express";
import getSomeMemesByFilter from "./core/services/GetSomeMemesByFilter";
import getSomeMemes from "./core/services/GetSomeMemes";

export let routes = Router();
routes.get("/memes", (req: Request, res: Response) => {
  const repo = new LowdbMemeRepository(req.context.db);
  const searchText = req.query.searchText?.toString();
  let memes = [];
  if(searchText)
    memes = getSomeMemesByFilter(repo, 50, searchText)
  else
  memes = getSomeMemes(repo,50);
  res.status(200).json(memes);
});