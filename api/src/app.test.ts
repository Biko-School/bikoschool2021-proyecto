import { getApp } from './app';
import request from 'supertest';

import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { DatabaseSchema } from './DatabaseSchema';

const adapter = new FileSync<DatabaseSchema>('./db/db.json');
const db = low(adapter);
const app = getApp(db);

describe('/api/memes', () => {
  it('endpoint exists', (done) => {
    request(app).get('/api/memes').expect(200, done);
  });

  it('endpoint returns array', (done) => {
    request(app)
      .get('/api/memes')
      .end((err, res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });

  it('endpoint returns 50 items', (done) => {
    request(app)
      .get('/api/memes')
      .end((err, res) => {
        expect(res.body.length).toBe(50);
        expect(res.body).toHaveLength(50);
        done();
      });
  });
});
