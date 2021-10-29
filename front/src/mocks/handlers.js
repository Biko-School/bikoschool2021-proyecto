import { rest } from "msw";
export const handlers = [
  rest.get("/memes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "Happy Birthday",
          src: "https://i.giphy.com/media/H3kNUxf6NubwitJuu6/giphy.webp",
        },
        {
          title: "Magical Mischief",
          src: "https://media2.giphy.com/media/55d4cDB5zXccQlA8Ig/giphy.webp",
        },
        {
          title: "Mayoral debate",
          src: "https://media4.giphy.com/media/DG03l4Yfn2Iz52WFlT/giphy.webp",
        },
      ])
    );
  }),
];
