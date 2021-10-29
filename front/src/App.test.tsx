import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Muestra el meme Happy Birthday", async () => {
  render(<App />);
  const meme = screen.getByRole("img", {
    name: "Happy Birthday",
  });

  expect(meme).toBeInTheDocument();
  expect(meme).toHaveAttribute(
    "src",
    "https://i.giphy.com/media/H3kNUxf6NubwitJuu6/giphy.webp"
  );
});

test("Muestra tres memes", async () => {
  render(<App />);
  const memes = [
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
  ];
  memes.forEach((meme) => {
    const memeElement = screen.getByRole("img", {
      name: meme.title,
    });
    expect(memeElement).toBeInTheDocument();
    expect(memeElement).toHaveAttribute("src", meme.src);
  });
});
