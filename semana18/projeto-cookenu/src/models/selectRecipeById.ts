import connection from "../database/connection";

export const selectRecipeById = async (id: string): Promise<any> => {
  try {
    const result = await connection
      .select("*")
      .from("Recipes_Cookenu")
      .where({ id });
    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
