import connection from "../utilities/connection";

export const getUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection
      .select("name", "nickname")
      .table("User")
      .where("id", id);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};
