import Memory from 'lowdb/adapters/Memory';
import { DatabaseSchema } from "./domain/DatabaseSchema";
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

    it.skip('devuelve el detalle de un meme', (done) => {
        request(app).get('/api/memes/YleuWir5NTNVXkflSp').expect(200)
            .then((response) => {
                expect(response.body.id).toBe('YleuWir5NTNVXkflSp')
                expect(response.body.name).toBe('Movie Brazil GIF by MOODMAN')
                expect(response.body.tags).toStrictEqual(["#movie", "#brazil", "#brazil the movie"])
                expect(response.body.image).toBe('https://giphy.com/gifs/moodman-movie-brazil-the-YleuWir5NTNVXkflSp')
                done();
            })
    })
})