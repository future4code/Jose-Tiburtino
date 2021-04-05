import connection from "../utilities/connection";

export const getTaskByUserId = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`SELECT
    Task.id as taskId,
    title,
    description,
    DATE_FORMAT(limit_date, '%d/%m/%Y') as limitDate,
    status,
    user_id as userId,
    User.nickname as userNickname
    FROM Task
    LEFT JOIN User ON Task.user_id = User.id
    WHERE User.id=${id}`);
    return result[0];
  } catch (error) {
    console.log(error);
    return [];
  }
};
