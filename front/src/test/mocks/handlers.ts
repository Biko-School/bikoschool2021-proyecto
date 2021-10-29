import { rest } from "msw";
import images from "../mockApi.json";

export const handlers = [
  rest.get("/memes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(images));
  }),
];
