import { app } from './app';
import request from 'supertest';

describe('/api/memes', () => {
  it('endpoint exists', (done) => {
    request(app).get('/api/memes').expect(200, done);
  });
});
