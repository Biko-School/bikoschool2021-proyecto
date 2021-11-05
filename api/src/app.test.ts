import { getApp } from './app';
import request from 'supertest';
import dbData from './fixtures/db.json';
import low from 'lowdb';
import Memory from 'lowdb/adapters/Memory';
import { DatabaseSchema } from './DatabaseSchema';
import { Meme } from './Meme';

describe('/api/memes', () => {
  let app;

  beforeEach(() => {
    const adapter = new Memory<DatabaseSchema>('');

    const db = low(adapter);
    db.defaults(dbData).write();

    app = getApp(db);
  });

  it('endpoint existe', (done) => {
    request(app).get('/api/memes').expect(200, done);
  });

  it('endpoint devuelve array', (done) => {
    request(app)
      .get('/api/memes')
      .end((err, res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });

  it('endpoint devuelve 50 elementos', (done) => {
    request(app)
      .get('/api/memes')
      .end((err, res) => {
        expect(res.body.length).toBe(50);
        expect(res.body).toHaveLength(50);
        done();
      });
  });

  it('endpoint devuelve elementos de tipo Meme', (done) => {
    request(app)
      .get('/api/memes')
      .end((err, res) => {
        const testMeme: Meme = {
          id: 'testID',
          url: 'testURL',
          title: 'testTitle',
        };
        const firstMeme = res.body[0];

        expect(Object.keys(firstMeme).length).toEqual(
          Object.keys(testMeme).length
        );
        Object.keys(testMeme).forEach((key) => {
          expect(firstMeme).toHaveProperty(key);
          expect(typeof firstMeme[key]).toEqual(typeof testMeme[key]);
        });

        //expect(firstMeme).toHaveProperty('id');
        //expect(typeof firstMeme.id).toEqual('string');
        //expect(firstMeme).toHaveProperty('url');
        //expect(typeof firstMeme.url).toEqual('string');
        //expect(firstMeme).toHaveProperty('title');
        //expect(typeof firstMeme.title).toEqual('string');
        done();
      });
  });
});
