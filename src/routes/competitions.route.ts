import { Router } from "express";
import { CompetitionsController } from "../controllers/competitions.controller";
import { IRoute } from "../interfaces/route.interface";

export class CompetitionsRoute implements IRoute {
  public path = "/competition";
  public router = Router();
  private CompetitionsController;

  constructor() {
    this.CompetitionsController = new CompetitionsController();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.CompetitionsController.get);
  }
}
