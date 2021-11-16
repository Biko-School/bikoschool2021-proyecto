import { rest } from 'msw';
import memes from '../memes.json';

export const handlers = [
  rest.get('http://localhost:4200/api/memes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(memes));
  }),
];
