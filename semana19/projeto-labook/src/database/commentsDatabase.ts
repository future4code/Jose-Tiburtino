import { Comment } from "../models/Comment";
import { Connection } from "./connection";

class CommentsDatabase extends Connection {
  private static tableName: string = "Labook_Comment";
  public comment = async (comments: Comment) => {
    try {
      const { id, user_id, post_id, comment } = comments;
      await Connection.connection
        .insert({ id, user_id, post_id, comment })
        .into(CommentsDatabase.tableName);
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

export default new CommentsDatabase();
