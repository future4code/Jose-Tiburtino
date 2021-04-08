import { Request, Response } from "express";
import { selectUserById } from "../models/selectUserById";
import { getTokenData } from "../services/authenticator";

class UsersProfilesController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { id } = req.params;
      if (!id) {
        errorCode = 422;
        throw new Error("O parâmetro ID está faltando.");
      }
      const token = req.headers.authorization as string;
      getTokenData(token);
      if (!token || !getTokenData) {
        errorCode = 406;
        throw new Error("Token inválido!");
      }
      const result = await selectUserById(id);
      if (!result) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      const user = {
        user_id: result.id,
        name: result.name,
        email: result.email,
        role: result.role,
      };
      res.status(200).send({ User: user });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}
export { UsersProfilesController };
