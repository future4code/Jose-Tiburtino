import connection from "../database/connection";
import { NewUser } from "../types";

export const insertUser = async (newUser: NewUser): Promise<void> => {
  try {
    await connection.insert(newUser).into("Users_Cookenu");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
