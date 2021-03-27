import connection from "../utilities/connection";

export const responsibleForATask = async (
  task_id: string,
  responsible_user_id: string
): Promise<void> => {
  try {
    await connection
      .insert({ task_id, responsible_user_id })
      .into("ResponsibleUserTaskRelation");
  } catch (error) {
    console.log(error);
  }
};
