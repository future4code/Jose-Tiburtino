import connection from "../database/connection";
import { Recipe } from "../types";

export const insertRecipe = async (newRecipe: Recipe): Promise<void> => {
  try {
    await connection.insert(newRecipe).into("Recipes_Cookenu");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
