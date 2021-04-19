import {
  Casino,
  LOCATION,
  NACIONALITY,
  User,
  verifyAge,
} from "../src/verifyAge";

describe("Age verification to enter in a casino", () => {
  test("One brazilian allowed", () => {
    const brazilian: User[] = [
      {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
    ];

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, brazilian);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  });

  test("One american allowed", () => {
    const brazilian: User[] = [
      {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      },
    ];

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, brazilian);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
    expect(result.americans.unallowed.length).toEqual(0);
  });

  test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toEqual([
      "Astrodev EUA",
      "Astrodev EUA",
    ]);
    expect(result.americans.unallowed).toContain("Astrodev EUA");
    expect(result.brazilians.unallowed).toContain("Astrodev BR");
  });

  test("Two americans allowed and two brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toEqual(2);
  });
});
