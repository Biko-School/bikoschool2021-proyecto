import { getApp } from './app';
import request from 'supertest';
import low from 'lowdb';
import Memory from 'lowdb/adapters/Memory';
import { DatabaseSchema } from './DatabaseSchema';
import dbData from './fixtures/db.json';

describe('/api/memes', () => {
  let app;

  beforeEach(() => {
    const adapter = new Memory<DatabaseSchema>('');

    const db = low(adapter);
    db.defaults(dbData).write();

    app = getApp(db);
  });

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
