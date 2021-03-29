import { Request, Response } from "express";
import selectOrderedUsers from "../models/selectOrderedUsers";

class GetOrderedUsersController {
  async show(req: Request, res: Response) {
    const ordersBy = ["email", "name", "type"];
    const orderTypes = ["ASC", "DESC"];
    try {
      const { orderBy = "email", orderType = "ASC" } = req.query;
      const result = await selectOrderedUsers(
        orderBy as string,
        (orderType as string).toUpperCase()
      );
      if (!ordersBy.includes(orderBy as string)) {
        res.statusCode = 422;
        throw new Error(`Invalid "orderBy" query: must be "name" or "type".`);
      }

      if (!orderTypes.includes((orderType as string).toUpperCase())) {
        res.statusCode = 422;
        throw new Error(`Invalid "orderType" query: must be "ASC" or "DESC"`);
      }
      res.status(200).send(result);
    } catch (error) {
      res.send(error.message || error.sqlMessage);
    }
  }
}

export { GetOrderedUsersController };
