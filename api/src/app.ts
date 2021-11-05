import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import {routes} from "./routes"
import cors from "cors";

export const createApp = (db) => {
    const app: Express = express();

    app.use(cors())
    // Shows request log on terminal
    // https://github.com/expressjs/morgan
    
    //console.log(No)
    if(process.env.NODE_ENV !== "test"){
    (app.use(morgan("dev")));
    }
    
    // Parses incoming requests with JSON payloads
    // http://expressjs.com/es/api.html#express.json
    app.use(express.json());
    
    // Parses incoming requests with urlencoded payloads
    // http://expressjs.com/es/api.html#express.urlencoded
    app.use(express.urlencoded({ extended: false }));
    
    // generar middleware contexto del request. Añadir tipado para sobrecargar el request y consumirlo desde routes.
    app.use((req, res, next) => {
        req.context = { db };
        next();
    })

    app.use("/api", routes)

    return app
}