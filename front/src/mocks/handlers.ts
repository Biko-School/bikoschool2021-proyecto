import { rest } from "msw";
import db from "../mocks/mockDb.json";

export const handlers = [
  rest.get("http://localhost:3010/api/memes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db));
  }),
];
