import { Request, Response } from "express";
import UserBusiness from "../business/userBusiness";
import { FriendDTO } from "../models/Friend";
import { LoginInputDTO, SignUpInputDTO, User } from "../models/User";

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

  public makeFriendship = async (req: Request, res: Response) => {
    try {
      const { resFriend_id } = req.body;
      const token: string = req.headers.authorization as string;
      const friend: FriendDTO = { resFriend_id, token };
      await UserBusiness.makeFriendBusiness(friend);
      res.status(200).send({ message: "You are friends now!" });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };

  public undoFriendship = async (req: Request, res: Response) => {
    try {
      const { resFriend_id } = req.params;
      const token: string = req.headers.authorization as string;
      const unfriend: FriendDTO = { resFriend_id, token };
      await UserBusiness.undoFriendBusiness(unfriend);
      res.status(200).send({ message: "You are not friends anymore." });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };
}

export { UserController };
