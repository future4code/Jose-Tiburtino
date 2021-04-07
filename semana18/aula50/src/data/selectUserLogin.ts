import connection from "./connection";

export const selectUserLogin = async (email: string): Promise<any> => {
  try {
    const result = await connection("User_Aula50").select("*").where({ email });
    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
