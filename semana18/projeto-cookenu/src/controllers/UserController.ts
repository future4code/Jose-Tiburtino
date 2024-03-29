import { Request, Response } from "express";
import { insertUser } from "../models/insertUser";
import { selectUserByEmail } from "../models/selectUserByEmail";
import { selectUserById } from "../models/selectUserById";
import { generateToken, getTokenData } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { generateHash, compareHash } from "../services/hashManager";
import { validateEmail } from "../services/validateEmail";
import { AuthenticationData, User } from "../types";
import { removeUser } from "../models/removeUser";

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
      const newUser: User = {
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
      if (errorCode === 200) {
        res.status(500).send({ message: "Internal server error" });
      } else {
        res.send({ message: error.message });
      }
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
      if (errorCode === 200) {
        res.status(500).send({ message: "Internal server error" });
      } else {
        res.send({ message: error.message });
      }
    }
  }

  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const token: string = req.headers.authorization as string;
      const authenticationData: AuthenticationData = getTokenData(token);
      if (!token || !authenticationData) {
        errorCode = 406;
        throw new Error("Token inválido!");
      }
      const result = await selectUserById(authenticationData.id);
      if (!result) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      const user = {
        id: result.id,
        name: result.name,
        email: result.email,
      };
      res.status(200).send({ User: user });
    } catch (error) {
      if (errorCode === 200) {
        res.status(500).send({ message: "Internal server error" });
      } else {
        res.send({ message: error.message });
      }
    }
  }

  async delete(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { id } = req.params;
      const token = req.headers.authorization as string;
      const authenticationData: AuthenticationData = getTokenData(token);
      if (authenticationData.role !== "Admin") {
        errorCode = 401;
        throw new Error(
          "Somente um Administrador pode realizar esta funcionalidade!"
        );
      }
      const user = await selectUserById(id);
      if (!user) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      await removeUser(id);
      res.status(200).send({ message: "Usuário deletado." });
    } catch (error) {
      if (errorCode === 200) {
        res.status(500).send({ message: "Internal server error" });
      } else {
        res.send({ message: error.message });
      }
    }
  }
}

export { UserController };
