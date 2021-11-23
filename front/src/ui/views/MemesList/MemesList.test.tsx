import { render, screen } from "@testing-library/react";
import memes from "../../../mocks/memes.json";
import { MemesList } from "./MemesList";

describe("App", () => {
  it("find memes images", async () => {
    render(<MemesList />);
    for (let meme of memes) {
      expect(await screen.findByAltText(meme.title)).toHaveAttribute(
        "src",
        meme.images.original.url
      );
    }
  });
});
