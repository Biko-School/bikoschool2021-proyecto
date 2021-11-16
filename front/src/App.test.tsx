import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import testMemes from "./mocks/fixtures/test-memes"

test.concurrent.each(testMemes)('Muestra el meme #%#', async (meme) => {
  render(<App />);
  const memeElement = await screen.findByRole("img", {
    name: meme.title,
  });
  
  expect(memeElement).toBeInTheDocument();
  expect(memeElement).toHaveAttribute("src", meme.images.original.url);
});
