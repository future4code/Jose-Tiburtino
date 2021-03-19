import dayjs from "dayjs";
import { Request, Response } from "express";
import { Extract, User } from "../data/users";
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

  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      if (!req.body.name || !req.body.cpf || !req.body.value) {
        errorCode = 422;
        throw new Error("Preenchimento inválido, tente novamente!");
      }
      const accountExist: User | undefined = verifyCpf(req.body.cpf);
      if (!accountExist) {
        errorCode = 404;
        throw new Error("Conta não existe em nosso banco de dados!");
      }
      const newDeposit: Extract = {
        value: Number(req.body.value),
        date: dayjs().format("DD/MM/YYYY"),
        description: "Depósito de dinheiro",
      };
      accountExist.information.push(newDeposit);
      res.status(202).send("Depósito realizado com sucesso!");
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }
}

export { BalanceController };
