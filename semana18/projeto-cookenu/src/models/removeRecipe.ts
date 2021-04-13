import connection from "../database/connection";

export const removeRecipe = async (id: string): Promise<void> => {
  try {
    await connection.delete().from("Recipes_Cookenu").where({ id });
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
