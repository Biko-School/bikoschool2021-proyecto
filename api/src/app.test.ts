import Memory from 'lowdb/adapters/Memory';
import { DatabaseSchema } from "./DatabaseSchema";
import { createApp } from './app'
import request from 'supertest'
import low from 'lowdb';
import dbData from './fixtures/db.json';

describe('/api/memes', () => {

    let app;

    beforeEach(() => {
        const adapter = new Memory<DatabaseSchema>('');
        const db = low(adapter);
        db.defaults(dbData).write();
        
        app = createApp(db)
    })

    it('recibe un array de longitud 50', (done) => {
        request(app).get('/api/memes').expect(200)
            .then((response) => {
                expect(response.body).toBeInstanceOf(Array);
                expect(response.body).toHaveLength(50);
                done();
            })
    })

    it('coge el meme con id: YleuWir5NTNVXkflSp', (done) => {
        request(app).get('/api/memes/YleuWir5NTNVXkflSp').expect(200)
            .then((response) => {
                expect(response.body.id).toBe('YleuWir5NTNVXkflSp')
                done();
            })
    })
})