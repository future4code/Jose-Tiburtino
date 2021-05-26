import { indexOf } from "../src/indexOf";

describe("Test indexOf", () => {
  it("Should return nothing", () => {
    const result = indexOf("cacaca", "c");
    expect(result).toBe(0);
  });

  it("Should return 2", () => {
    const result = indexOf("branca", "a");
    expect(result).toBe(2);
  });
});
