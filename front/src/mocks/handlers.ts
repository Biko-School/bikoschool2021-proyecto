import { rest } from 'msw'
import api from '../api.json'

export const handlers = [
  rest.get("http://localhost:3001/api/memes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(api))
  }),
]
