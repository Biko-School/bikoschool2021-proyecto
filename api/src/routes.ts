import { Router, Request, Response } from "express";
import { ApiMemeRepository } from "./infrastructure/ApiMemeRepository";

export const routes = Router();

routes.get('/memes', function (req: Request, res: Response) {
    const db = req.context.db;
    const apiMemeRepository = new ApiMemeRepository(db)
    const memes = apiMemeRepository.getLastMemes()
    res.status(200).json(memes);
})

routes.get('/memes/:filteredValue', function (req: Request, res: Response) {
    const { params } = req
    const { filteredValue } = params
    const db = req.context.db;
    const apiMemeRepository = new ApiMemeRepository(db)
    const memes = apiMemeRepository.getFilteredMemes(filteredValue)
    res.status(200).json(memes);
})

routes.get('/memes/:memeId', function (req: Request, res: Response) {
    const { params } = req
    const { memeId } = params
    const db = req.context.db;
    const meme = db.get('memes').find({ id: memeId }).value()
    const { id, title: name, tags, images: image } = meme
    const urlImage = image.small.url
    res.status(200).json({id, name, tags, urlImage })
})