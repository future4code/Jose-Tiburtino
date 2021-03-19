import { Request, Response } from "express";
import { User, users } from "../data/users";
import { verifyAge } from "../utilities/verifiers";

class AccountController {
  async create(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      if (!req.body.name || !req.body.cpf || !req.body.birthDate) {
        errorCode = 422;
        throw new Error("Preenchimento inválido, tente novamente!");
      }

      const accountAuth: boolean = verifyAge(req.body.birthDate);
      if (!accountAuth) {
        errorCode = 401;
        throw new Error("Somente maiores de 18 anos podem abrir uma conta!");
      }

      const newUser: User = {
        name: req.body.name,
        cpf: req.body.cpf,
        birthDate: req.body.birthDate,
        balance: 0,
        information: [],
      };
      users.push(newUser);
      res.status(201).send({ message: "Conta criada com sucesso!" });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { AccountController };
