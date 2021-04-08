import { Request, Response } from "express";
import { insertUser } from "../models/insertUser";
import { selectUserByEmail } from "../models/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { generateHash, compareHash } from "../services/hashManager";
import { validateEmail } from "../services/validateEmail";
import { NewUser } from "../types";

class UserController {
  async create(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { name, email, password, role } = req.body;
      if (!name) {
        errorCode = 422;
        throw new Error("Por favor insira um nome!");
      }
      if (!email) {
        errorCode = 422;
        throw new Error("Por favor insira um email!");
      }
      validateEmail(email);
      if (!password || password.lenght < 6) {
        errorCode = 422;
        throw new Error("Senha inválida, por favor forneça 6 caracteres.");
      }
      const id = generateId();
      const hashPassword: string = await generateHash(password);
      const newUser: NewUser = {
        id: id,
        name: name,
        email: email,
        password: hashPassword,
        role: role || "Normal",
      };
      await insertUser(newUser);
      const token = generateToken({ id, role });
      res.status(201).send({ message: "Usuário criado com sucesso", token });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { email, password } = req.body;
      if (!email) {
        errorCode = 422;
        throw new Error("E-mail inválido!");
      }
      validateEmail(email);
      if (!password || password.lenght < 6) {
        errorCode = 422;
        throw new Error("Senha inválida, insira mais de 6 caracteres.");
      }
      const newUser = {
        email: email,
        password: password,
      };
      const user = await selectUserByEmail(newUser.email);
      if (!user) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      const passwordCheck = await compareHash(newUser.password, user.password);
      if (!passwordCheck) {
        errorCode = 404;
        throw new Error("Senha inválida!");
      }
      const result = {
        id: user.id,
        role: user.role,
      };
      const token = generateToken(result);
      res.status(200).send({ acess_token: token });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { UserController };
