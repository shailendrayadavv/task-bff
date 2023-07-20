import { Request, Response } from "express";
import { ContinentsServices } from "../services";

export class ContinentsController {
  private continentsService;
  constructor() {
    this.continentsService = new ContinentsServices();
  }
  public get = async (req: Request, res: Response) => {
    try {
      res.json(await this.continentsService.fetch());
    } catch (e) {
      res.status(400).json({ message: "error" });
    }
  };
}
