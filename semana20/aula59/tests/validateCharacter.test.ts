import { validateCharacter } from "../src/validateCharacter";

describe("Validate characters", () => {
  test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
});
