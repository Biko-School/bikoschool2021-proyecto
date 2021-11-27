import { rest } from "msw";
import testMemes from "./fixtures/test-memes";
export const handlers = [
  rest.get("/api/memes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testMemes));
  }),
];
