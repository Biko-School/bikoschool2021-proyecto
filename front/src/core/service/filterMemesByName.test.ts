import filterMemesByName from "./filterMemesByName";

describe("Filter memes", () => {
  it("should return an array", () => {
    const array = filterMemesByName("", []);
    expect(Array.isArray(array)).toBe(true);
  });
});
