import { performAttack } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

describe("Characters attacks", () => {
  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
    const attacker: Character = {
      name: "Eren",
      life: 15000,
      defense: 200,
      strength: 5000,
    };

    const defender: Character = {
      name: "Levi",
      life: 1500,
      defense: 4000,
      strength: 10000,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(500);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Mikasa",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Armin",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});
