import { Request, Response } from "express";
import { responsibleForATask } from "../data/responsibleForATask";

class ResponsibleForATaskController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    const { task_id, responsible_user_id } = req.body;
    try {
      if (!task_id || !responsible_user_id) {
        res
          .status(400)
          .send({ message: "ID da task ou ID do usuário está faltando." });
      }
      await responsibleForATask(task_id, responsible_user_id);
      res.status(200).send({ message: "Tarefa designada a um responsável." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { ResponsibleForATaskController };
