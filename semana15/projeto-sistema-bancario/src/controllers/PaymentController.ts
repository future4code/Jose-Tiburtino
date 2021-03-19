import dayjs from "dayjs";
import { Request, Response } from "express";
import { Extract, User } from "../data/users";
import { now, today, updateTime, verifyCpf } from "../utilities/verifiers";

class PaymentController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      if (!req.body.cpf || !Number(req.body.value)) {
        errorCode = 422;
        throw new Error("Informe o CPF e o valor!");
      }
      let date: any = req.body.date;
      if (!date) {
        date = today;
      } else if (!updateTime(date)) {
        throw new Error("Preencha da seguinte forma: DD/MM/YYYY");
      } else {
        date = updateTime(date);
        if (date < today) {
          throw new Error("A data preenchida já passou!");
        }
      }
      const accountExist: User | undefined = verifyCpf(req.body.cpf);
      if (!accountExist) {
        errorCode = 404;
        throw new Error("Conta não encontrada!");
      } else if (accountExist.balance < Number(req.body.value)) {
        throw new Error("Saldo insuficiente para pagamento.");
      }
      const newPayment: Extract = {
        value: Number(req.body.value),
        date: dayjs().format("DD/MM/YYYY"),
        description: "Pagamento de conta." || "",
      };
      accountExist?.information.push(newPayment);
      res.status(202).send("Pagamento feito com sucesso!");
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { PaymentController };
