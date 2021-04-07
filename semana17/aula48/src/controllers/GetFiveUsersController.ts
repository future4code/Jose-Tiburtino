import { Request, Response } from "express";
import selectFiveUsers from "../models/selectFiveUsers";

class GetFiveUsersController {
  async show(req: Request, res: Response) {
    try {
      const { pageNumber = "1" } = req.query;
      const result = await selectFiveUsers(Number(pageNumber));
      res.status(200).send(result);
    } catch (error) {
      res.send(error.message || error.sqlMessage);
    }
  }
}

export { GetFiveUsersController };
