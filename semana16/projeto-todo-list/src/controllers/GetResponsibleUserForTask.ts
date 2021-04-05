import { Request, Response } from "express";
import { getResponsibleUsersForTask } from "../data/getResponsibleUsersForTask";

class GetResponsibleUserForTask {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = req.params.id;
      if (!req.params.id) {
        errorCode = 422;
        throw new Error("Insira um ID válido");
      }
      const result = await getResponsibleUsersForTask(id);
      if (!result) {
        errorCode = 404;
        throw new Error("Não foi achado nenhum responsável para a tarefa!");
      }
      res.status(200).send({ users: result });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }
}

export { GetResponsibleUserForTask };
