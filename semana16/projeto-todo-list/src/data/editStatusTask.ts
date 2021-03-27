import connection from "../utilities/connection";

export const editStatusTask = async (
  id: string,
  status: string
): Promise<void> => {
  try {
    await connection("Task").where("id", id).update({ status: status });
  } catch (error) {
    console.log(error);
  }
};
