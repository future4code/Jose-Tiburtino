import { Request, Response } from "express";
import { editStatusTask } from "../data/editStatusTask";

class EditStatusTaskController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { id, status } = req.body;
      if (status !== "to do" && status !== "doing" && status !== "done") {
        errorCode = 422;
        throw new Error(
          "Status inválido, tente preencher com: to do, doing ou done"
        );
      }
      if (!id || !status) {
        errorCode = 422;
        throw new Error("Preencha com um ID e Status válido");
      }
      await editStatusTask(id, status);
      res.status(201).send({ message: "Status da task atualizada!" });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { EditStatusTaskController };
