import { Request, Response } from "express";
import { User, Extract } from "../data/users";
import { now, today, verifyCpf } from "../utilities/verifiers";

class BalanceController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const cpfNumber: number = Number(req.params.cpf);
      const account: User | undefined = verifyCpf(cpfNumber);
      if (!account) {
        errorCode = 404;
        throw new Error("Conta não foi encontrada!");
      }
      const todayPayments: Extract[] | undefined = account.information.filter(
        (Extract: any) => {
          return Extract.date <= today;
        }
      );
      let newBalance: number = account.balance;
      for (let Extract of todayPayments) {
        newBalance = account.balance + Extract.value;
      }
      account.balance = newBalance;
      res.status(200).send("Saldo da conta bancária atualizado!");
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }

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
