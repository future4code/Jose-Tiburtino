import { User } from "../models/User";
import { Connection } from "./connection";

class UserDatabase extends Connection {
  private static tableName: string = "Labook_Users";
  private dataToModel(data?: any): User {
    return data && new User(data.id, data.name, data.email, data.password);
  }
  public insertUser = async (user: User): Promise<void> => {
    try {
      await Connection.connection
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into(UserDatabase.tableName);
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };

  public selectUserByEmail = async (email: string): Promise<User> => {
    try {
      const result = await Connection.connection
        .select("*")
        .from(UserDatabase.tableName)
        .where({ email });
      return this.dataToModel(result[0]);
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

export default new UserDatabase();
