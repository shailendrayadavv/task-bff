import { Request, Response } from "express";
import { SportsServices } from "../services";

export class SportsController {
  private taskService;
  constructor() {
    this.taskService = new SportsServices();
  }
  public get = async (req: Request, res: Response) => {
    try {
      const season: string = req.query.season as string;
      const page: number = Number(req.query.page);
      console.log("hi",season,page)
      res.json(await this.taskService.fetch(season, page));
    } catch (e) {
      res.status(400).json({ message: "failed" });
    }
  };
}
