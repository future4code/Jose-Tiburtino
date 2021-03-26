import connection from "../connection";

export const getUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection("User").where("id", id);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};
