import connection from "../database/connection";
import { User } from "../types";

export const insertUser = async (newUser: User): Promise<void> => {
  try {
    await connection.insert(newUser).into("Users_Cookenu");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
