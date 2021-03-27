import connection from "../utilities/connection";

export const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  userId: string
): Promise<void> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        title: title,
        description: description,
        limit_date: limitDate,
        user_id: userId,
      })
      .into("Task");
  } catch (error) {
    console.log(error);
  }
};
