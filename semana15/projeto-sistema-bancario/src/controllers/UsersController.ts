import { Request, Response } from "express";
import { users, User } from "../data/users";

class UsersController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const result: User[] = users;
      res.status(200).send(result);
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }
}

export { UsersController };
