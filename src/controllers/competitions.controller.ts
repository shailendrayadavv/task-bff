import { Request, Response } from "express";
import { CompetitionsServices } from "../services";

export class CompetitionsController {
  private userListService;
  constructor() {
    this.userListService = new CompetitionsServices();
  }
  public get = async (req: Request, res: Response) => {
    try {
      const sportId: number = Number(req.query.sportId);
      const page: number = Number(req.query.page);
      const continentId: number = Number(req.query.continentId);
      res.json(
        await this.userListService.fetch(sportId, page, continentId)
      );
    } catch (e) {
      res.status(400).json({ message: "error" });
    }
  };
}
