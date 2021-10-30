import { app } from './app';
import request from 'supertest';

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
      });
  });
});
