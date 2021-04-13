import connection from "../database/connection";
import { Follow } from "../types";

export const removeFollow = async (unfollow: Follow): Promise<void> => {
  try {
    await connection("Following").where(unfollow).delete();
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
