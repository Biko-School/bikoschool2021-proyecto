import { rest } from "msw";
import memes from "../../../material/db.json";

export const handlers = [
  rest.get("http://localhost:3000/api/memes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(memes.memes));
  }),
];
