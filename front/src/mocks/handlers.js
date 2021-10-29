import { rest } from 'msw';
import memes from '../../src/memes.json';

export const handlers = [
	rest.get('https://memeapi.com/api', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(memes));
	}),
];
