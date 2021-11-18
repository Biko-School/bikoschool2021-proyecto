import cleanSearchText from "./cleanSearchText";

describe("Clean text", () => {
  it("should clean searched text", () => {
    const cleanedSearchText = cleanSearchText(" hola    mundo ");
    expect(cleanedSearchText).toEqual("hola mundo");
  });
});
