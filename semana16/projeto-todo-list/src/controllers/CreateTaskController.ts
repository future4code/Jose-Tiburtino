import dayjs from "dayjs";
import { Request, Response } from "express";
import { createTask } from "../data/createTask";

class CreateTaskController {
  async create(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { title, description, limitDate, userId } = req.body;
      const checkDate = dayjs(limitDate).format("YYYY-MM-DD");
      if (!title) {
        errorCode = 422;
        throw new Error("Por favor coloque um título.");
      }
      if (!description) {
        errorCode = 422;
        throw new Error("Por favor coloque uma descrição.");
      }
      if (!limitDate) {
        errorCode = 422;
        throw new Error("Por favor coloque uma data-limite.");
      }
      if (!userId) {
        errorCode = 422;
        throw new Error("Por favor informe o ID do usuário.");
      }
      if (!checkDate) {
        errorCode = 406;
        throw new Error("Coloque uma data formato YYYY/MM/DD.");
      }
      await createTask(title, description, checkDate, userId);
      res.status(201).send({ message: `Tarefa ${title} criada com sucesso!` });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { CreateTaskController };
