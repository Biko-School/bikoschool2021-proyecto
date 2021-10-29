import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { memeService } from "./getMeme";

describe("list gif", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("when the page is undefinded then return an error message", () => {
    jest.spyOn(memeService, "getMeme").mockReturnValue(undefined);
    render(<App />);

    expect(
      screen.queryByText("There are not availables gifs")
    ).toBeInTheDocument();
  });

  it("Check if the page return a gif", () => {
    jest.spyOn(memeService, "getMeme").mockReturnValue({ title: "irrelevant" });
    render(<App />);
    screen.debug();
    expect(
      screen.queryByText("There are not availables gifs")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("irrelevant")).toBeInTheDocument();
  });
});
