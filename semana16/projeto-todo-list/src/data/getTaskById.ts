import connection from "../utilities/connection";

export const getTaskById = async (id: string): Promise<any> => {
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
    WHERE Task.id=${id}`);
    return result[0][0];
  } catch (error) {
    console.log(error);
  }
};