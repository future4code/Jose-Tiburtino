import connection from "../utilities/connection";

export const getAllUsers = async (): Promise<any> => {
  try {
    const result = await connection.select("id", "nickname").table("User");
    return result;
  } catch (error) {
    return [];
  }
};
