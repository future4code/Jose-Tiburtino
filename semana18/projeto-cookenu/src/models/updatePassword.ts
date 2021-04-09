import connection from "../database/connection";

export const updatePassword = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    await connection
      .update({ password: password })
      .from("Users_Cookenu")
      .where({ email });
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
