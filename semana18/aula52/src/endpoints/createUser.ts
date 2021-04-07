import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/auth";
import { generateId } from "../services/generateId";
import { hash } from "../services/hashManager";
import { newUser } from "../types";

export const createUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password, role } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }
    const hashPassword: string = await hash(password);
    const id = generateId();
    const newUser: newUser = {
      id: id,
      email: email,
      password: hashPassword,
      role: role || "NORMAL",
    };
    await insertUser(newUser);
    const token = generateToken({ id, role });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
