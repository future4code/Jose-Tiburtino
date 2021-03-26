import { Request, Response } from "express";
import { getTaskById } from "../data/getTaskById";

class GetTaskByIdController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = req.params.id;
      const result = await getTaskById(id);
      if (!result) {
        errorCode = 404;
        throw new Error("Id da tarefa não foi encontrado.");
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { GetTaskByIdController };
