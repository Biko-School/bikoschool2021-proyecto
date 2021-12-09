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
});
