import { Request, Response } from "express";
import selectAllSections from "../models/selectAllSections";
import AllSections from "../types/allSections";

class GetAllSectionsController {
  async show(req: Request, res: Response) {
    try {
      const {
        name = "",
        type = "",
        orderby = "id",
        ordertype = "ASC",
        page = "1",
        perpage = "5",
      } = req.query;
      const options: AllSections = {
        nameSearch: name as string,
        typeSearch: type as string,
        orderBy: orderby as string,
        orderType: ordertype as string,
        pageNumber: page as string,
        perPage: perpage as string,
      };
      const result = await selectAllSections(options);
      res.status(200).send(result);
    } catch (error) {
      res.send(error.message || error.sqlMessage);
    }
  }
}

export { GetAllSectionsController };
