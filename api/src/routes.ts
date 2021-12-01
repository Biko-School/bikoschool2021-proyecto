import { Router } from "express";

export const routes = Router();

routes.get("/memes", (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50).value();
  const response = memes.map((meme) => {
    return {
      id: meme.id,
      title: meme.title,
      image: meme.images.original.url,
      tags: meme.tags,
    };
  });
  res.status(200).json(response);
});

routes.get("/memes/:id", (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50).value();
  const response = memes.map((meme) => {
    return {
      id: meme.id,
      title: meme.title,
      image: meme.images.original.url,
      tags: meme.tags,
    };
  });
  res.status(200).json(response);
});
