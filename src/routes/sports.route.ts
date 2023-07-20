import { Router } from "express";
import { SportsController } from "../controllers/sports.controller";
import { IRoute } from "../interfaces/route.interface";

export class SportsRoute implements IRoute {
  public path = "/sports";
  public router = Router();
  private sportsController;
  constructor() {
    this.sportsController = new SportsController();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.sportsController.get);
  }
}
