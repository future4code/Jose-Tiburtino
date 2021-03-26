import connection from "../connection";

export const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  userId: string
): Promise<void> => {
  await connection
    .insert({
      id: Date.now(),
      title: title,
      description: description,
      limit_date: limitDate,
      user_id: userId,
    })
    .into("Task");
};
