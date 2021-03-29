import { Request, Response } from "express";
import selectByName from "../models/selectByName";
import { user } from "../types/user";

class GetUserByNameController {
  async show(req: Request, res: Response) {
    try {
      const name: string = req.query.name as string;
      if (!name) {
        res.statusCode = 422;
        throw new Error("Please provide a name!");
      } else {
        const users: user[] = await selectByName(name);
        if (!users.length) {
          res.statusCode = 404;
          throw new Error("No user found");
        }
        res.status(200).send(users);
      }
    } catch (error) {
      res.send(error.message || error.sqlMessage);
    }
  }
}

export { GetUserByNameController };
