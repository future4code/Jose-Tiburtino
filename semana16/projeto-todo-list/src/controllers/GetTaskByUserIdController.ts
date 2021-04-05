import { Request, Response } from "express";
import { getTaskByUserId } from "../data/getTaskByUserId";

class GetTaskByUserIdController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = String(req.query.userId);
      if (!id) {
        errorCode = 422;
        throw new Error("Por favor verifique o campo da query.");
      }
      const result = await getTaskByUserId(id);
      if (!result) {
        errorCode = 404;
        throw new Error("Usuário ou tarefa não foram achados em nosso banco!");
      }
      res.status(200).send({ tasks: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { GetTaskByUserIdController };
