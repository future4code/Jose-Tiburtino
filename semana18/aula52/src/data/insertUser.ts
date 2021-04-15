import { newUser } from "../types";
import connection from "./connection";

export const insertUser = async (newUser: newUser) => {
  await connection.insert(newUser).into("User_Aula50");
};