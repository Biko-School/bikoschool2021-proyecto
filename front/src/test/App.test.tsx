import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Home", () => {
  it("will show a gif", async () => {
    render(<App />);

    const display = await screen.findByRole("img", { name: "Kid punch" });
    expect(display).toBeInTheDocument();
  });
});
