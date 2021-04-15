import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../models/user";

export function generateToken(payload: AuthenticationData): string {
  return jwt.sign(payload, process.env.JWT_KEY as string, {
    expiresIn: "1y",
  });
}

export function getTokenData(token: string): AuthenticationData {
  return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData;
}
