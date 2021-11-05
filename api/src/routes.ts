import { Router, Request, Response } from "express";

export const routes = Router();

routes.get('/memes', function (req: Request, res: Response) {
    const db = req.context.db;
    const memes = db.get('memes').take(50).value()
    const cleanMemes = memes.map(({id, giphyUrl, tags, title }) => ({ id, name: title, tags, image: giphyUrl}));
    res.status(200).json(cleanMemes);
})

routes.get('/memes/:memeId', function (req: Request, res: Response) {
    const { params } = req
    const { memeId } = params
    const db = req.context.db;
    const meme = db.get('memes').find({ id: memeId }).value()
    const { id, title: name, tags, giphyUrl: image } = meme
    res.status(200).json({id, name, tags, image})
})
