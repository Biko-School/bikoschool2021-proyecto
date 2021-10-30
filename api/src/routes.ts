import express, { Express, Request, Response, Router } from "express";

const routes = express.Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default routes;
