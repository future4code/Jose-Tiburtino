import connection from "../database/connection";

export const updateRecipe = async (
  id: string,
  title: string,
  description: string
): Promise<void> => {
  try {
    await connection.raw(`
        UPDATE Recipes_Cookenu SET title = "${title}",
        description = "${description}"
        WHERE id = "${id}"
    `);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
