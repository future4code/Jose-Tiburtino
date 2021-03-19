export type User = {
  name: string;
  cpf: number;
  birthDate: string;
  balance: number;
  information: Extract[];
};

export type Extract = {
  value: number;
  date: number;
  description: string;
};

export const users: User[] = [
  {
    name: "José Victor",
    cpf: 12395617814,
    birthDate: "24/02/1999",
    balance: 3000,
    information: [
      {
        value: 200,
        date: 19032021,
        description: "não sei",
      },
    ],
  },
];
