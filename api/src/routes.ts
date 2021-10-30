import express, { Express, Request, Response, Router } from "express";
import fs from "fs";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

interface DatabaseSchema {
  memes: Meme[];
}

interface Meme {
  id: string;
  type: string;
  slug: string;
  giphyUrl: string;
  title: string;
  source_tld: string;
  source_post_url: string;
  import_datetime: Date;
  username: string;
  images: {
    original: Image;
    small: Image;
  };
  tags: string[];
}

interface Image {
  width: number;
  height: number;
  url: string;
}

const adapter = new FileSync<DatabaseSchema>("./database/db.json");
const db = low(adapter);

const routes = express.Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.status(200).json(db.get("memes").take(50));
});

export default routes;
