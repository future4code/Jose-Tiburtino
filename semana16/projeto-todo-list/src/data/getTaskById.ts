import connection from "../connection";

export const getTaskById = async (id: string): Promise<any> => {
  try {
    const result = await connection("Task").where("id", id);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};
