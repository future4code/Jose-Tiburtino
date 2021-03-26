import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";

class GetUserByIdController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = req.params.id;
      const result = await getUserById(id);
      if (!result) {
        errorCode = 404;
        throw new Error("Tente novamente, usuário não foi encontrado!");
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { GetUserByIdController };
