import { checkParentheses } from "../src/checkParentheses";

describe("test checkParentheses", () => {
  it("Should be true", () => {
    const result = checkParentheses("{[]}");
    expect(result).toBe(true);
  });

  it("Should be false", () => {
    const result = checkParentheses("([)]");
    expect(result).toBe(false);
  });
});
