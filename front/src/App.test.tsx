import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Home", () => {
  it("will show a gif", () => {
    render(<App />);

    const display = document.querySelector("img") as HTMLImageElement;
    expect(display.src).toContain("image01");
  });
});
