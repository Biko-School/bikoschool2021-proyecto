import { Router, Request, Response } from "express";

export const routes = Router();

const memes = new Array(50)

routes.get('/memes', function (req: Request, res: Response) {
    res.status(200).send(memes)
})