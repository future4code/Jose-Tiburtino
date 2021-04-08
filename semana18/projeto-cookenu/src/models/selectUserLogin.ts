import connection from "../database/connection";

export const selectUserByEmail = async (email: string): Promise<any> => {
  try {
    const result = await connection
      .select("*")
      .from("Users_Cookenu")
      .where({ email });
    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
