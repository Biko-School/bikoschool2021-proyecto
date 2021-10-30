import { Router } from "express"
import low from "lowdb"
import FileSync from 'lowdb/adapters/FileSync'
import { DataBaseSchema } from "./DataBaseSchema"



export const getRoutes =  (db) => {
    
    
    const routes = Router()
    
    routes.get('/memes', function (req, res) {
        const memes = db.get('memes').sortBy("import_datetime").take(50).value()
        
        res.status(200).json(memes);
    });
    return routes
}
