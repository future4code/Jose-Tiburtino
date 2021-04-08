import { Request, Response } from "express";
import { insertUser } from "../models/insertUser";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { generateHash } from "../services/hashManager";
import { validateEmail } from "../services/validateEmail";
import { NewUser, Role } from "../types";

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
}

export { UserController };
