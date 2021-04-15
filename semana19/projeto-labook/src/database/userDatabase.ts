import { User } from "../models/User";
import { Connection } from "./connection";

class UserDatabase extends Connection {
  private static tableName: string = "Labook_Users";
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
}

export default new UserDatabase();
