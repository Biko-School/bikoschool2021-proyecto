import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

import testMemes from "./mocks/fixtures/test-memes";
import userEvent from "@testing-library/user-event";

test.concurrent.each(testMemes)("Muestra el meme #%#", async (meme) => {
  render(<App />);
  const memeElement = await screen.findByRole("img", {
    name: meme.title,
  });

  expect(memeElement).toBeInTheDocument();
  expect(memeElement).toHaveAttribute("src", meme.images.original.url);
});

test("Debería encontrar un meme por su título", async () => {
render(<App />);
const inputSearch = screen.getByPlaceholderText(
"¿Que quieres buscar? ¡Encuentralo!"
);

expect(inputSearch).toBeInTheDocument();

const testMeme = testMemes[0];

userEvent.type(inputSearch, testMeme.title);

await waitFor(() => {
const memeElements = screen.getAllByRole("img");
expect(memeElements).toHaveLength(3);
expect(memeElements[0]).toHaveAttribute(
"src",
testMeme.images.original.url
);
});
});
