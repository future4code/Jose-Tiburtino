import { Request, Response } from "express";
import { loginBusiness, signupBusiness } from "../business/userBusiness";
import { loginInput, signupInputDTO } from "../model/user";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body as loginInput;
    const token: string = await loginBusiness({ email, password });
    res.send({
      message: "Usuário logado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const {
      name,
      nickname,
      email,
      password,
      role,
    } = req.body as signupInputDTO;
    const token = await signupBusiness({
      name,
      nickname,
      email,
      password,
      role,
    });
    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
