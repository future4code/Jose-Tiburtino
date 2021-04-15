import { Request, Response } from "express";
import UserBusiness from "../business/userBusiness";
import { LoginInputDTO, SignUpInputDTO } from "../models/User";

class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      const user: SignUpInputDTO = {
        name,
        email,
        password,
      };
      const token = await UserBusiness.signupBusiness(user);
      res.status(201).send({ message: "User created", token: token });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const userLogin: LoginInputDTO = {
        email,
        password,
      };
      const token = await UserBusiness.loginBusiness(userLogin);
      res.status(200).send({ message: "Sucessfully logged!", token });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };
}

export { UserController };
