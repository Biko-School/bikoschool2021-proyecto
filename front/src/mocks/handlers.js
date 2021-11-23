import { rest } from 'msw';
import memes from '../../src/memes.json';

export const handlers = [
	rest.get('http://localhost:8000/api/memes', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(memes));
	}),
];
