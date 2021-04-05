import { Request, Response } from "express";
import { searchUser } from "../data/searchUser";

class SearchUserController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const nickname = req.query.nickname as string;
      if (!nickname) {
        errorCode = 422;
        throw new Error("Por favor insira seu nickname na query.");
      }
      const result = await searchUser(nickname);
      if (!result) {
        errorCode = 404;
        throw new Error("Usuário não foi encontrado!");
      } else {
        res.status(200).send({ users: result });
      }
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { SearchUserController };
