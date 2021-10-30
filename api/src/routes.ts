import { Router } from "express";

export const routes = Router();

routes.get("/memes", (req, res) => {
  res.sendStatus(200);
});
