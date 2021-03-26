import connection from "../utilities/connection";

export const searchUser = async (nickname: string): Promise<any> => {
  try {
    const result = await connection
      .select("id", "nickname")
      .table("User")
      .where("nickname", nickname);
    return result[0];
  } catch (error) {
    return [];
  }
};
