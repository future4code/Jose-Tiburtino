import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDatabase } from "../data/ShowDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { AddShowDTO } from "../model/Show";

const showBusiness = new ShowBusiness(
  new IdGenerator(),
  new Authenticator(),
  new ShowDatabase()
);

export class ShowController {
  public addShow = async (req: Request, res: Response) => {
    try {
      const token: string = req.headers.authorization as string;
      const input: AddShowDTO = {
        weekDay: req.body.weekDay,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        bandId: req.body.bandId,
      };
      const result = await showBusiness.createShow(input, token);
      res
        .status(201)
        .send({ Show: result });
    } catch (error) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };
}
