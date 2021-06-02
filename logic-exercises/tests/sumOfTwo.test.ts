import { sumOfTwo } from "../src/sumOfTwo";

describe("Test sumOfTwo", () => {
  it("Should return [0,1]", () => {
    expect(sumOfTwo([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
  it("Should return [1,3]", () => {
    expect(sumOfTwo([4, 5, 10, 12, 21], 17)).toStrictEqual([1, 3]);
  });
});
