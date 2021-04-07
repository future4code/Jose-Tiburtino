import { addressInfo } from "../types";
import connection from "./connection";

export const insertCep = async (newAdress: addressInfo) => {
  try {
    await connection("Users_Adress52").insert(newAdress);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
