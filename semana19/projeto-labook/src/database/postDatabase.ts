import { Post } from "../models/Post";
import { Connection } from "./connection";

class PostDatabase extends Connection {
  private static tableName: string = "Labook_Posts";
  private dataToModel(data?: any): Post {
    return (
      data &&
      new Post(
        data.id,
        data.photo,
        data.description,
        data.type,
        data.created_at,
        data.author_id
      )
    );
  }

  public insertPost = async (post: Post): Promise<void> => {
    try {
      await Connection.connection
        .insert({
          id: post.getId(),
          photo: post.getPhoto(),
          description: post.getDescription(),
          type: post.getType(),
          created_at: post.getCreatedAt(),
          author_id: post.getAuthorId(),
        })
        .into(PostDatabase.tableName);
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };

  public selectPostById = async (id: string): Promise<any> => {
    try {
      const result = await Connection.connection
        .select("*")
        .from(PostDatabase.tableName)
        .where({ id });
      return this.dataToModel(result[0]);
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };

  public selectAllPosts = async (id: string): Promise<any> => {
    try {
      const result = await Connection.connection.raw(`
      SELECT Labook_Users.name, Labook_Posts.created_at,
      Labook_Posts.description,
      Labook_Posts.photo
      FROM Labook_Posts
      JOIN Labook_Users
      ON Labook_Posts.author_id = Labook_Users.id
      WHERE Labook_Posts.author_id IN (
      SELECT resFriend_id 
      FROM Labook_Friends
      WHERE reqFriend_id = "${id}")
      OR Labook_Posts.author_id IN (
      SELECT reqFriend_id 
      FROM Labook_Friends
      WHERE resFriend_id = "${id}")
      ORDER BY Labook_Posts.created_at DESC;
      `);
      return result[0];
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

export default new PostDatabase();
