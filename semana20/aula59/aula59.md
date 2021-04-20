## Exercício 3

## C) A diferença está quando chamamos a função validateCharacter na primeira e na segunda não chamamos mas sim criamos uma chamando uma interface.

## Exercício 4

A) Deveremos criar um Mock nos próximos teste utilizando a função validateCharacter, pois assim iremos validar o personagem para ver se ele está valido a atacar.

B)

```sh
  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
  });
```

C)

```sh
  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
      return false;
    });
  });
```
