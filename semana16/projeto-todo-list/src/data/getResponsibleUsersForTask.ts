import connection from "../utilities/connection";

export const getResponsibleUsersForTask = async (id: string): Promise<any> => {
  try {
    const result = await connection
      .select("User.id", "User.nickname")
      .where("ResponsibleUserTaskRelation.task_id", "=", id)
      .from("User")
      .join(
        "ResponsibleUserTaskRelation",
        "User.id",
        "=",
        "ResponsibleUserTaskRelation.responsible_user_id"
      );
    return result[0];
  } catch (error) {
    console.log(error);
  }
};
