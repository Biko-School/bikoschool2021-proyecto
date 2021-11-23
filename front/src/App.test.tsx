import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

test('Debería encontrar un meme por su título', async () => {
  render(<App/>);
  const inputSearch = screen.getByPlaceholderText('¿Que quieres buscar? ¡Encuentralo!');

  expect(inputSearch).toBeInTheDocument();
  
  const testMeme = testMemes[0];

  fireEvent.input(inputSearch, { target: { value: testMeme.title } });

  const memeElement = await screen.findByRole("img", {
    name: testMeme.title,
  });
  expect(memeElement).toBeInTheDocument();
  expect(memeElement).toHaveAttribute("src", testMeme.images.original.url);
  
})
