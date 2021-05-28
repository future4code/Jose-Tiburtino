import { houseThief } from "../src/houseThief";

describe("Test houseThief", () => {
  it("Should return 2", () => {
    const result = houseThief([1, 2, 1]);
    expect(result).toBe(2);
  });

  it("Should return 10", () => {
    const result = houseThief([1, 7, 9, 1]);
    expect(result).toBe(10);
  });
});
