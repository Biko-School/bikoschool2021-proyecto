import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import memesData from "../mocks/mockApi.json";

describe("Home", () => {
  it("will match first 10 elements with db", () => {
    jest.setTimeout(30000);
    render(<App />);
    memesData.memes.map(async (meme) => {
      const display = await screen.findByRole("img", { name: meme.title });
      expect(display).toBeInTheDocument();
    });
  });
});
