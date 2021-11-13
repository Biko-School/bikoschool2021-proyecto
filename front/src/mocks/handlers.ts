import { rest } from "msw";
import db from "../mocks/mockApi.json";

export const handlers = [
  rest.get("http://localhost:3010/api/meme", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db));
  }),
];
