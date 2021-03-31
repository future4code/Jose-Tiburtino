import { Request, Response } from "express";
import { getAllUsers } from "../data/getAllUsers";

class GetAllUsersController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const result = await getAllUsers();
      res.status(200).send({ users: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { GetAllUsersController };
