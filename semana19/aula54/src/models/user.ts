export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type AuthenticationData = {
  id: string;
  role: USER_ROLES;
};

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export type signupInput = {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type DeleteInput = {
  token: string;
  id: string;
};
