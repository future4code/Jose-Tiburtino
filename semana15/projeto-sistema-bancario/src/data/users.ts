export type User = {
  name: string;
  cpf: number;
  birthDate: string;
  balance: number;
  information: Extract[];
};

export type Extract = {
  value: number;
  date: string;
  description: string;
};

export const users: User[] = [
  {
    name: "José Victor",
    cpf: 12395617814,
    birthDate: "24/02/1999",
    balance: 500,
    information: [
      {
        value: 200,
        date: "16/03/2021",
        description: "Depósito de dinheiro",
      },
    ],
  },
  {
    name: "Luanzito",
    cpf: 45712359272,
    birthDate: "25/05/1998",
    balance: 300,
    information: [
      {
        value: 150,
        date: "13/03/2021",
        description: "Depósito de dinheiro",
      },
    ],
  },
];
