import express, { Express, Request, Response, Router } from "express";
import { MemeDTO } from "./interfaces/MemeDTO";

export const routers = express.Router();

routers.get("/memes", (req: Request, res: Response) => {
  const db = req.context.db;
  const result = db.get("memes").take(50).value();  
  res.status(200).json(result);
});

routers.get("/memesByTag/:tag", (req: Request, res: Response) => {
  const db = req.context.db;
  var tagFilter = req.params.tag;
  const result: MemeDTO[] = db.get("memes").filter((meme:MemeDTO) => meme.tags.find((tag) => tag.includes(tagFilter.toLowerCase())));
  res.status(200).json(result);
});

//Tambien se puede hacer asi. De esta forma no hace falta declarar la interface
// router.get("/memes", (req: Request, res: Response) => {
//   const memesList = db.get("memes").value();
//   res.status(200).json(chooseFiftyMemes(memesList, 50));
// });

// function chooseFiftyMemes(memes, n) {
//   return memes.slice(0, n);
// }
