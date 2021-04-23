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

  test("Should return false for life === 0", () => {
    const result = validateCharacter({
      name: "Magneto",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for strength === 0", () => {
    const result = validateCharacter({
      name: "Chaves",
      life: 1000,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for defense === 0", () => {
    const result = validateCharacter({
      name: "Godines",
      life: 1000,
      strength: 250,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life negative value", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: -100,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Hecarm",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
});
