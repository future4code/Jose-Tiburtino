import { connection } from "../data/connection";
import { task } from "../model/task";

export const insertTask = async (task: task) => {
  await connection("to_do_list_tasks").insert({
    id: task.id,
    title: task.title,
    description: task.description,
    deadline: task.deadline,
    author_id: task.authorId,
  });
};

export const selectTaskById = async (id: string): Promise<task> => {
  const result = await connection.raw(`
         SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
         JOIN to_do_list_users AS users
         ON author_id = users.id
         WHERE tasks.id = '${id}';
     `);

  return result[0][0];
};
