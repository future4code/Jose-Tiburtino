import dayjs from "dayjs";
import { Request, Response } from "express";
import { getTaskById } from "../data/getTaskById";

class GetTaskByIdController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = req.params.id;
      const partResult = await getTaskById(id);
      if (!partResult) {
        errorCode = 404;
        throw new Error("Id da tarefa não foi encontrado.");
      } else {
        const result = {
          taskId: partResult.id,
          title: partResult.title,
          description: partResult.description,
          limitDate: dayjs(partResult.limit_date).format("DD/MM/YYYY"),
          status: partResult.status,
          userId: partResult.user_id,
          userNickname: partResult.nickname,
        };
        res.status(200).send(result);
      }
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { GetTaskByIdController };
