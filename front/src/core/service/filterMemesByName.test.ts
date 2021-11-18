import filterMemesByName from "./filterMemesByName";
import memesObj from "./../../mocks/mockDb.json";

describe("Filter memes", () => {
  it("should return an array", () => {
    const array = filterMemesByName("", []);
    expect(Array.isArray(array)).toBe(true);
  });
  it("should return an array with one item in it", () => {
    expect(filterMemesByName("Movie", memesObj.memes)).toHaveLength(1);
  });
});
