export type newUser = {
  id: string;
  email: string;
  password: string;
  role: string;
};

export type addressInfo = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

export type userAdress = {
  id: string;
  street: string;
  number: number;
  neighborhood: string;
  complement?: string;
  city: string;
  state: string;
  user_id: string;
};
