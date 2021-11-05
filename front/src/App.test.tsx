import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import testMemes from "./mocks/fixtures/test-memes.js"

test("Muestra el meme Movie Brazil GIF by MOODMAN", async () => {
  render(<App />);
  const meme = await screen.findByRole("img", {
    name: "Movie Brazil GIF by MOODMAN",
  });

  expect(meme).toBeInTheDocument();
  expect(meme).toHaveAttribute(
    "src",
    "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif"
  );
});
test("Muestra tres memes", async () => {
  render(<App />);
  testMemes.forEach(async (meme) => {
    const memeElement = await screen.findByRole("img", {
      name: meme.title,
    });
    expect(memeElement).toBeInTheDocument();
    expect(memeElement).toHaveAttribute("src", meme.images.original.url);
  });
});