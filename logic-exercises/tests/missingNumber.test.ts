import { missingNumber } from "../src/missingNumber";

describe("Testing missingNumber", () => {
  it("Should return 47", () => {
    const numberArray: number[] = [];
    for (let i = 1; i <= 50; i++) {
      numberArray.push(i);
      numberArray.splice(46, 1);
    }
    const result = missingNumber(numberArray);
    expect(result).toBe(47);
  });

  it("Should return 70", () => {
    const numberArray: number[] = [];
    for (let i = 1; i <= 80; i++) {
      numberArray.push(i);
      numberArray.splice(69, 1);
    }
    const result = missingNumber(numberArray);
    expect(result).toBe(70);
  });
});
