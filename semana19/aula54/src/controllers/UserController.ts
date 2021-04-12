import { Request, Response } from "express";
import { allUsersBusiness } from "../business/allUsersBusiness";
import { loginBusiness } from "../business/loginBusiness";
import { removeUserBusiness } from "../business/removeUserBussiness";
import { signupBusiness } from "../business/signupBusiness";

class UserController {
  async signup(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { name, email, password, role } = req.body;
      const newUser = {
        name: name,
        email: email,
        password: password,
        role: role || "NORMAL",
      };
      const token = await signupBusiness(newUser);
      res.status(201).send({ message: "Usuário criado com sucesso", token });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { email, password } = req.body;
      const user = {
        email: email,
        password: password,
      };
      const token = await loginBusiness(user);
      res.status(200).send({ message: "Logado com sucesso", token });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const token: string = req.headers.authorization as string;
      const users = await allUsersBusiness(token);
      res.status(200).send({ Users: users });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const token: string = req.headers.authorization as string;
      const { id } = req.params;
      if (!id) {
        throw new Error("O ID para remover está errado.");
      }
      const request = {
        token: token,
        id: id,
      };
      await removeUserBusiness(request);
      res.status(200).send({ message: "Usuário removido." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
    await destroyConnection();
  }
}

export { UserController };
  function destroyConnection() {
    throw new Error("Function not implemented.");
  }

