import { rest } from 'msw';
import gifs from '../gif.json';

export const handlers = [
  rest.get('http://localhost:3000/gifs', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(gifs));
  }),
];
