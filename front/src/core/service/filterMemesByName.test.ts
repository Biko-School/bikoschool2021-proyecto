import filterMemesByName from "./filterMemesByName";

describe("Filter memes", () => {
  it("should return an array", () => {
    const array = filterMemesByName("", []);
    expect(Array.isArray(array)).toBe(true);
  });
  it("should return an array with one item in it", () => {
    expect(filterMemesByName("Movie", [])).toHaveLength(1);
  });
});
