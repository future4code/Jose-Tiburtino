export type NewUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export enum Role {
  Normal = "Normal",
  Admin = "Admin",
}

export type AuthenticationData = {
  id: string;
  role: Role;
};
