import { MakeFriend } from "../models/Friend";
import { Connection } from "./connection";

class FriendshipDataBase extends Connection {
  private static tableName: string = "Labook_Friends";
  public makeFriend = async (friend: MakeFriend): Promise<void> => {
    try {
      const { reqFriend_id, resFriend_id } = friend;
      await Connection.connection
        .insert({ reqFriend_id, resFriend_id })
        .into(FriendshipDataBase.tableName);
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

export default new FriendshipDataBase();
