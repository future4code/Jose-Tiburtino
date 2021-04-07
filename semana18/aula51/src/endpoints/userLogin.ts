import { Request, Response } from "express";
import { selectUserLogin } from "../data/selectUserLogin";
import { generateToken } from "../services/auth";
import { compare } from "../services/hashManager";

export const userLogin = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password, role } = req.body;
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
    const passwordCompare = await compare(req.body.password, user.password);
    if (!passwordCompare) {
      throw new Error("Invalid password");
    }
    const token = generateToken({ id: user.id, role: user.role });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
