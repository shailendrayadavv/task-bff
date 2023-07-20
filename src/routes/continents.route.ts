import { Router } from "express";
import { ContinentsController } from "../controllers/continents.controller";
import { IRoute } from "../interfaces/route.interface";

export class ContinentsRoute implements IRoute {
  public path = "/continent";
  public router = Router();
  private ContinentsController;

  constructor() {
    this.ContinentsController = new ContinentsController();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.ContinentsController.get);
  }
}
