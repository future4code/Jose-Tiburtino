import { Request, Response } from "express";
import { User, Extract } from "../data/users";
import { today, verifyCpf } from "../utilities/verifiers";

class InternTransferController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      if (
        !req.body.senderCpf ||
        !req.body.senderName ||
        !req.body.receiverCpf ||
        !req.body.receiverName ||
        !req.body.value
      ) {
        errorCode = 422;
        throw new Error("Preencha os campos corretamente!");
      }

      const senderAccount: User | undefined = verifyCpf(req.body.senderCpf);
      const receiverAccount: User | undefined = verifyCpf(req.body.receiverCpf);

      if (!senderAccount) {
        errorCode = 404;
        throw new Error("Conta do remetente não foi encontrada.");
      }
      if (!receiverAccount) {
        errorCode = 404;
        throw new Error("Conta do destinatario não foi encontrada.");
      }
      if (senderAccount.balance < Number(req.body.value)) {
        throw new Error("Saldo insuficiente para a transferência");
      }

      const senderTransfer: Extract = {
        value: Number(req.body.value),
        date: today,
        description: `Transferência de ${req.body.receiverName} `,
      };
      senderAccount?.information.push(senderTransfer);

      const receiverTransfer: Extract = {
        value: Number(req.body.value),
        date: today,
        description: `Transferência de ${req.body.senderName}`,
      };
      receiverAccount?.information.push(receiverTransfer);
      res.status(202).send("Transferência feita com sucesso.");
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }
}

export { InternTransferController };
