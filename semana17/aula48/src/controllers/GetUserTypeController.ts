import { Request, Response } from "express";
import selectUserType from "../models/selectUserType";

class GetUserTypeController {
  async show(req: Request, res: Response) {
    try {
      const type = req.params.type as string;
      const result = await selectUserType(type);
      if (!result.length) {
        res.statusCode = 404;
        throw new Error("User not found.");
      }
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
}

export { GetUserTypeController };
