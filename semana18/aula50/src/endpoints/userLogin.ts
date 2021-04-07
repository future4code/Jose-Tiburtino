import { Request, Response } from "express";
import { generateToken } from "../data/auth";
import { selectUserLogin } from "../data/selectUserLogin";

export const userLogin = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }
    const user = await selectUserLogin(email);
    if (!user) {
      throw new Error("Usuário não existe.");
    }
    const token = generateToken({ id: user.id });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
