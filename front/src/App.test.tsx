import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { memeService } from "./services/getMeme";

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

  it("Check if the page return a title", () => {
    jest
      .spyOn(memeService, "getMeme")
      .mockReturnValue({ title: "irrelevant", src: undefined });
    render(<App />);
    screen.debug();
    expect(
      screen.queryByText("There are not availables gifs")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("irrelevant")).toBeInTheDocument();
  });

  it("Chek if the page return a image", () => {
    jest.spyOn(memeService, "getMeme").mockReturnValue({
      src: "https://media3.giphy.com/media/srYJjOhpgK4eZE6sw9/giphy.gif?cid=ecf05e47666266966085986452224bd17cfe84353cb3e0c5&rid=giphy.gif&ct=g",
      title: undefined,
    });
    render(<App />);
    screen.debug();
    expect(
      screen.queryByText("There are not availables gifs")
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("gifImage")).toBeInTheDocument();
  });

  it("Chek if the page return a image also with id", () => {
    jest.spyOn(memeService, "getMeme").mockReturnValue({
      src: "https://media3.giphy.com/media/srYJjOhpgK4eZE6sw9/giphy.gif?cid=ecf05e47666266966085986452224bd17cfe84353cb3e0c5&rid=giphy.gif&ct=g",
      title: undefined,
      id: 1,
    });
    render(<App />);
    screen.debug();
    expect(
      screen.queryByText("There are not availables gifs")
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("gifImage")).toBeInTheDocument();
    expect(screen.getByTestId("1")).toBeInTheDocument();
  });
});
