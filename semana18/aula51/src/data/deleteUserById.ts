import connection from "./connection";

export const deleteUserById = async (id: string): Promise<void> => {
  try {
    await connection("User_Aula50").where({ id }).delete();
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
