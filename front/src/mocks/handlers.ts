import { rest } from 'msw'
import memes from './memes.json'

export const handlers = [
  rest.get('/test/memes', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    return res(ctx.json(memes))
  })
]