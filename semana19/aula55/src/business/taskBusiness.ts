import { insertTask } from "../data/taskDatabase";
import { createTaskInput } from "../model/task";
import { generateId } from "../services/idGenerator";

export async function taskBusiness(input: createTaskInput): Promise<void> {
  try {
    if (
      !input.title ||
      !input.description ||
      !input.deadline ||
      !input.authorId
    ) {
      throw new Error(
        '"title", "description", "deadline" e "authorId" são obrigatórios'
      );
    }

    const id: string = generateId();

    await insertTask({
      id,
      title: input.title,
      description: input.description,
      deadline: input.deadline,
      authorId: input.authorId,
    });
  } catch (error) {}
}
