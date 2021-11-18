import filterMemesByName from "./filterMemesByName";

import memesObj from "./../../mocks/mockDb.json";

describe("Filter memes by title", () => {
  it("should return an array", () => {
    const array = filterMemesByName("", []);
    expect(Array.isArray(array)).toBe(true);
  });
  it('should return Movie Brazil GIF by MOODMAN searching "Movie"', () => {
    const filteredMemes = filterMemesByName("Movie", memesObj.memes);
    expect(filteredMemes).toHaveLength(1);
    expect(filteredMemes[0].title).toEqual("Movie Brazil GIF by MOODMAN");
  });
});
