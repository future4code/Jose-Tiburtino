// A:
// const myString: string = 24;
// O typescript da o seguinte erro: Type 'number' is not assignable to type 'string'.

// B:
const myNumber: number = 20;
// Para ela também considerar strings podemos colocar da seguinte forma:
const myNumberString: number | string = "Olá";

// C:
type person = {
  name: string;
  age: number;
  favColor: string;
};

const jose: person = {
  name: "José",
  age: 21,
  favColor: "black",
};

const luan: person = {
  name: "Tibiano",
  age: 21,
  favColor: "pink",
};

const gordines: person = {
  name: "Gold",
  age: 21,
  favColor: "brown",
};

// D:

enum Colors {
  RED = "Red",
  ORANGE = "Orange",
  YELLOW = "Yellow",
  GREEN = "Green",
  BLUE = "Blue",
  ANIL = "Anil",
  VIOLET = "Violet",
}

type personColor = {
  name: string;
  age: number;
  favColor: Colors;
};

const jardel: personColor = {
  name: "Platina",
  age: 43,
  favColor: Colors.ORANGE,
};

const vmcm1000: personColor = {
  name: "treme-treme",
  age: 22,
  favColor: Colors.BLUE,
};
