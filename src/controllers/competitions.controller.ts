import { Request, Response } from "express";
import { CompetitionsServices } from "../services";
import Joi from "joi";
import { competitionsSchema } from "../validations/competitions.validations";
import { ICompetitionRequest } from "../interfaces/competition.interdace";

export class CompetitionsController {
  private competitionsService;
  constructor() {
    this.competitionsService = new CompetitionsServices();
  }
  public get = async (req: Request, res: Response) => {
    try {
      const reqBody  = req.query as unknown;
      const { error } = competitionsSchema.validate(reqBody);
      if (error) {
        console.log(error);
        throw new Error();
      }
      res.json(await this.competitionsService.fetch(reqBody as ICompetitionRequest));
    } catch (e) {
      res.status(400).json({ message: "bad request" });
    }
  };
}
