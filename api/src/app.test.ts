import { app } from './app'
import request from 'supertest'
import { response } from 'express'

describe('/api/memes', () => {
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