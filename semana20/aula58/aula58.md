## Exercício 1

A)

```sh
export interface User {
  name: string;
  balance: number;
}
```

B)

```sh
export const performPurchase = (
  user: User,
  value: number
): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
};
```

---

## Exercício 2

```sh
describe("Perform purchase", () => {
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100,
    };

    const result = performPurchase(user, 40);

    expect(result).toEqual({
      name: "Astrodev",
      balance: 60,
    });
  });

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 50,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30,
    };

    const result = performPurchase(user, 50);

    expect(result).not.toBeDefined();
  });
});
```

---

## Exercício 3

```sh
export const verifyAge = (casino: Casino, users: User[]): Result => {
  const brazilians: ResultItem = {
    allowed: [],
    unallowed: [],
  };
  const americans: ResultItem = {
    allowed: [],
    unallowed: [],
  };
  for (const user of users) {
    if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        if (user.nacionality === NACIONALITY.BRAZILIAN) {
          brazilians.allowed.push(user.name);
        } else {
          americans.allowed.push(user.name);
        }
      } else {
        if (user.nacionality === NACIONALITY.BRAZILIAN) {
          brazilians.unallowed.push(user.name);
        } else {
          americans.unallowed.push(user.name);
        }
      }
    } else {
      if (user.age >= 21) {
        if (user.nacionality === NACIONALITY.AMERICAN) {
          americans.allowed.push(user.name);
        } else {
          brazilians.allowed.push(user.name);
        }
      } else {
        if (user.nacionality === NACIONALITY.AMERICAN) {
          americans.unallowed.push(user.name);
        } else {
          brazilians.unallowed.push(user.name);
        }
      }
    }
  }
  return { brazilians, americans };
```

C) É bastante coisa para fazer, então as vezes acaba demorando um pouco para reproduzir pois são muitas alternativas.

---

## Exercício 4

```sh
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
  });
});
```

---

## Exercício 5

A)

```sh
    expect(result.brazilians.allowed.length).toBeLessThan(2);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
```

B)

```sh
    expect(result.americans.unallowed.length).toEqual(0);
```

C)

```sh
    expect(result.americans.unallowed).toContain("Astrodev EUA");
    expect(result.brazilians.unallowed).toContain("Astrodev BR");
```

D)

```sh
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toEqual(2);
```
