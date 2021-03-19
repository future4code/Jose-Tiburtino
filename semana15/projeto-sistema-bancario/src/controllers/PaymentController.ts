import dayjs from "dayjs";
import { Request, Response } from "express";
import { Extract, User } from "../data/users";
import { verifyCpf } from "../utilities/verifiers";

class PaymentController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      if (!req.body.cpf || !Number(req.body.value)) {
        errorCode = 422;
        throw new Error("Informe o CPF e o valor!");
      }
      const accountExist: User | undefined = verifyCpf(req.body.cpf);
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
