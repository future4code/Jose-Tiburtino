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

export type NewRecipe = {
  id: string;
  title: string;
  description: string;
  created_at: string;
  userCreator_id: Role;
};

export type NewFollow = {
  follower_id: string;
  following_id: string;
};
