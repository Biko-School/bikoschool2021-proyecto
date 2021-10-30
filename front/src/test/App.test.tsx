import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import memesData from "../mocks/mockApi.json";

describe("Home", () => {
  it("will show a gif", async () => {
    render(<App />);

    const display = await screen.findByRole("img", { name: "Kid punch" });
    expect(display).toBeInTheDocument();
  });
  it("will show 3 gif", async () => {
    render(<App />);
    memesData.results.map(async (meme) => {
      const display = await screen.findByRole("img", { name: meme.title });
      expect(display).toBeInTheDocument();
    });
  });
});
