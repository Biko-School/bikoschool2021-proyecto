import filterMemesByTag from "./filterMemesByTag";
import memesObj from "../../db.json";

describe("Filter memes by tag", () => {
  it("should search by tag", () => {
    const filteredMemes = filterMemesByTag("dance moves", memesObj.memes);
    expect(filteredMemes[0].tags[0]).toEqual("#dance moves");
  });
});
