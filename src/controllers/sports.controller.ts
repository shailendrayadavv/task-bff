import { Request, Response } from "express";
import { SportsServices } from "../services";
import { sportsSchema } from "../validations/sports.validations";
import { ISportsRequest } from "../interfaces/sports.interface";

export class SportsController {
  private sportsService;
  constructor() {
    this.sportsService = new SportsServices();
  }
  public get = async (req: Request, res: Response) => {
    try {
      const reqBody = req.query as unknown;
      const { error } = sportsSchema.validate(reqBody);
      if (error) {
        throw new Error();
      }
      res.json(await this.sportsService.fetch(reqBody as ISportsRequest));
    } catch (e) {
      res.status(400).json({ message: "bad request" });
    }
  };
}
