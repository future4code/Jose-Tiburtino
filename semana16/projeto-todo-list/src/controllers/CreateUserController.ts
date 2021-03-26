import { Request, Response } from "express";
import { createUser } from "../data/createUser";

class CreateUserController {
  async create(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { name, nickname, email } = req.body;
      if (!name || !nickname || !email) {
        errorCode = 422;
        throw new Error("Preencha as informações corretamente!");
      }
      await createUser(name, nickname, email);
      res.status(201).send("Usuário criado com sucesso!");
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { CreateUserController };
