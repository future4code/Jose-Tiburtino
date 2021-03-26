import { Request, Response } from "express";
import { editUser } from "../data/editUser";

class EditUserController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const id = req.params.id;
      const { name, nickname } = req.body;
      if (!name) {
        errorCode = 422;
        throw new Error("Preencha o campo name para a alteração!");
      }
      if (!nickname) {
        errorCode = 422;
        throw new Error("Preencha o campo nickname para a alteração!");
      }
      await editUser(id, name, nickname);
      res.status(201).send({ message: `Usuário ${name} editado com sucesso!` });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { EditUserController };
