import connection from "../database/connection";

export const selectRecipesFeed = async (): Promise<any> => {
  try {
    const result = await connection("Recipes_Cookenu")
      .select("*")
      .orderBy("created_at", "desc");
    return result;
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
