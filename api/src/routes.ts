import { Router } from "express";
import request from "supertest";
import express, { Express, Request, Response } from "express";

export const routes = Router();

routes.get("/meme", (req: Request, res: Response) => {
  res.sendStatus(200);
});
