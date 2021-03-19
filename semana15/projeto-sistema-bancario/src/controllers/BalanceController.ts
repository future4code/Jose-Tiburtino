import { Request, Response } from "express";
import { User } from "../data/users";
import { verifyCpf } from "../utilities/verifiers";

class BalanceController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const cpfNumber: number = Number(req.query.cpf);
      if (!cpfNumber) {
        throw new Error("Insira um CPF existente em nossa base de dados.");
      }
      const checkCpf: User | undefined = verifyCpf(cpfNumber);

      if (!checkCpf) {
        errorCode = 404;
        throw new Error("Insira um CPF válido!");
      }
      const result = checkCpf.balance;
      res.status(200).send({ balance: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { BalanceController };
