import express, { Express, Request, Response, Router } from "express";

const routes = express.Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.send([]);
});

export default routes;
