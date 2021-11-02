import {createApp} from "./app"
import request from "supertest"
import Memory from "lowdb/adapters/Memory"
import dbData from './fixtures/db.json'
import { DataBaseSchema } from "DataBaseSchema"
import Lowdb from "lowdb"

describe('/api/memes', () => {
    let app;

    beforeEach(() => {
        const adapter = new Memory<DataBaseSchema>('')
        const db = Lowdb(adapter)

        db.defaults(dbData).write()

        app = createApp(db)
    })


    it("existe el endpoint", (done) => {
        request(app).get('/api/memes').expect(200, done);
    })

    it("devuelve un listado de memes", (done) => {
        request(app)
            .get('/api/memes')
            .expect(200)
            .then((response) => {
                expect(response.body).toBeInstanceOf(Array);
                done();
            });
    });

    it("devuelve un listado de 50 memes", (done) => {
        request(app)
            .get('/api/memes')
            .expect(200)
            .then((response) => {
                expect(response.body).toBeInstanceOf(Array);
                expect(response.body).toHaveLength(50);
                done();
            });
    });
})