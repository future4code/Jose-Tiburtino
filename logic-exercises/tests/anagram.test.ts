import { anagram } from "../src/anagram";

describe("Test anagram", () => {
  it("Should be false", () => {
    const result = anagram("gato", "rato");
    expect(result).toBe(false);
  });
  it("Should be true", () => {
    const result = anagram("gato", "toga");
    expect(result).toBe(true);
  });
});
