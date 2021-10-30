import { Router } from "express";
import { Request, Response } from "express";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { DatabaseSchema } from "./DatabaseSchema";

const adapter = new FileSync<DatabaseSchema>("./db/db.json");
const db = low(adapter);

export const routes = Router();

routes.get("/meme", (req: Request, res: Response) => {
  const memes = db.get("memes").take(50).value();

  res.status(200).json(memes);
});
