import { Router, Request, Response } from "express";

export const routes = Router();

routes.get('/memes', function (req: Request, res: Response) {
    res.sendStatus(200)
})