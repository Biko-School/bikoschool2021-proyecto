import express, { Express, Request, Response, Router } from "express";

const routes = express.Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.send(new Array(50));
});

export default routes;
