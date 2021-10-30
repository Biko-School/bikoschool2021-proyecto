import { Router } from "express";

export const routes = Router();

routes.get("/memes", (req, res) => {
  const memes = [];
  for (let index = 0; index < 50; index++) {
    memes.push(`${index}`);
  }
  res.status(200).json(memes);
});
