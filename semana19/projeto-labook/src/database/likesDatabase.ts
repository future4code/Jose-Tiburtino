import { Connection } from "./connection";

class LikesDatabase extends Connection {
  private static tableName: string = "Labook_Like";
  public like = async (user_id: string, post_id: string) => {
    try {
      return await Connection.connection
        .insert({ user_id, post_id })
        .into(LikesDatabase.tableName);
    } catch (error) {
      console.log("Ta aqui,database", error);
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

export default new LikesDatabase();
