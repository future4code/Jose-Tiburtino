import { lonelyNumber } from "../src/lonelyNumber";

describe("Test lonelyNumber", () => {
  it("Should return 1", () => {
    const result = lonelyNumber([2, 2, 1]);
    expect(result).toBe(1);
  });
  it("Should return 4", () => {
    const result = lonelyNumber([4, 1, 2, 1, 2]);
    expect(result).toBe(4);
  });
});
