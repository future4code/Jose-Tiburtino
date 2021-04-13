import connection from "../database/connection";
import { Follow } from "../types";

export const insertFollowUser = async (
  newFollowing: Follow
): Promise<void> => {
  try {
    await connection.insert(newFollowing).into("Following");
  } catch (error) {
    console.log(error);
    throw new Error(error.message || error.sqlMessage);
  }
};
