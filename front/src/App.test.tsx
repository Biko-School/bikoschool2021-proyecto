import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Muestra el meme Happy Birthday", () => {
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
