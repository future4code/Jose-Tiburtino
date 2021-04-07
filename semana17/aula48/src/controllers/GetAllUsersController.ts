import { Request, Response } from "express";
import selectAllUsers from "../models/selectAllUsers";

class GetAllUsersController {
  async show(req: Request, res: Response) {
    try {
      const users = await selectAllUsers();
      if (!users.length) {
        res.statusCode = 404;
        throw new Error("No recipes found");
      }

      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
}

export { GetAllUsersController };
