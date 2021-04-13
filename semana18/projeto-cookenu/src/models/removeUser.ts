import connection from "../database/connection";

export const removeUser = async (id: string): Promise<any> => {
  try {
    await connection.delete().from("Following").where("follower_id", id);
    await connection.delete().from("Following").where("following_id", id);
    await connection
      .delete()
      .from("Recipes_Cookenu")
      .where("userCreator_id", id);
    await connection.delete().from("Users_Cookenu").where({ id });
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
