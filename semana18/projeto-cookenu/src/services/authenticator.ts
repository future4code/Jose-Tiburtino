import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export const generateToken = (input: AuthenticationData): string => {
  const token: string = jwt.sign(
    {
      id: input.id,
      role: input.role,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: process.env.JWT_EXPIRE_TIME,
    }
  );
  return token;
};

export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData;

  return {
    id: payload.id,
    role: payload.role,
  };
};
