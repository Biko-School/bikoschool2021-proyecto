import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("listado de gif", () => {
  it("Cuando la pagina no tiene nada devuelve un mensaje de error", () => {
    render(<App />);

    expect(screen.getByText("No hay gifs disponibles")).toBeInTheDocument();
  });

  it("Que la pagina devuelva un gif", () => {
    render(<App />);

    expect(screen.getByText("No hay gifs disponibles")).not.toBeInTheDocument();
    expect(screen.getByText("primer meme")).toBeInTheDocument();
  });
});
