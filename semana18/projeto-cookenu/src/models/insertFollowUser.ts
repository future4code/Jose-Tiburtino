import connection from "../database/connection";
import { NewFollow } from "../types";

export const insertFollowUser = async (
  newFollowing: NewFollow
): Promise<void> => {
  try {
    await connection.insert(newFollowing).into("Following");
  } catch (error) {
    console.log(error);
    throw new Error(error.message || error.sqlMessage);
  }
};
