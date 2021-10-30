import { Router } from "express"
import low from "lowdb"
import FileSync from 'lowdb/adapters/FileSync'


interface DataBaseSchema {
    memes: Meme[]
}

interface Meme {}

const adapter = new FileSync<DataBaseSchema>('./db/db.json')
const db = low(adapter)

export const routes = Router()

routes.get('/memes', function (req, res) {
    const memes = db.get('memes').sortBy("import_datetime").take(50).value()
    
    res.status(200).json(memes);
});

export default routes;