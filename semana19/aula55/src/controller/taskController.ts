import { Request, Response } from "express";
import { taskBusiness } from "../business/taskBusiness";
import { selectTaskById } from "../data/taskDatabase";

export const createTask = async (req: Request, res: Response) => {
  try {
    //recebeu os valores da req
    const { title, description, deadline, authorId } = req.body;

    await taskBusiness({ title, description, deadline, authorId });
    //envia a resposta
    res.status(201).end();
  } catch (error) {
    res.statusMessage = error.message;
    res.status(500).end();
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await selectTaskById(id);

    if (!result) {
      throw new Error("Tarefa não encontrada");
    }

    const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      status: result.status,
      authorId: result.author_id,
      authorNickname: result.nickname,
    };

    res.status(200).send(taskWithUserInfo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
