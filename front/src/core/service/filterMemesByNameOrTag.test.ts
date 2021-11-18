import filterMemesByNameOrTags from "./filterMemesByNameOrTag";
import memesObject from "./../../mocks/mockDb.json";

describe("Filter Memes By name or tag", () => {
  it("should return an array", () => {
    const filteredMemes = filterMemesByNameOrTags("lol", memesObject.memes);
    expect(Array.isArray(filteredMemes)).toBe(true);
  });
});
