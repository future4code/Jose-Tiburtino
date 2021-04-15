import { user } from "../models/user";
import connection from "./connection";

export const insertUser = async (user: user): Promise<void> => {
  try {
    await connection.insert(user).into("User_Arq");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};

export const selectUserByEmail = async (email: string): Promise<any> => {
  try {
    const result = await connection
      .select("*")
      .from("User_Arq")
      .where({ email });
    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};

export const selectAllUsers = async (): Promise<any> => {
  try {
    const result = await connection("User_Arq").select("*");
    return result;
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};

export const removeUser = async (id: string): Promise<any> => {
  try {
    await connection.delete().from("User_Arq").where({ id });
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
