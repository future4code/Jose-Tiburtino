import { Request, Response } from "express";
import UserBusiness from "../business/userBusiness";
import { SignUpInputDTO } from "../models/User";

class UserController {
  public signup = async (req: Request, res: Response) => {
    let errorCode: number = 400;
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
      res.status(errorCode).send({ message: error.message });
    }
  };
}

export { UserController };
