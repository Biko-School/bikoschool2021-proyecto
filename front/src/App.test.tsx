import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Muestra el meme Happy Birthday", () => {
  render(<App />);
  const memeItem = screen.getByRole("img", {
    name: "Happy Birthday",
  });

  expect(memeItem).toBeInTheDocument();
  expect(memeItem).toHaveAttribute(
    "src",
    "https://i.giphy.com/media/H3kNUxf6NubwitJuu6/giphy.webp"
  );
});
