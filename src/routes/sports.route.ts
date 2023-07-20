import { Router } from "express";
import { SportsController } from "../controllers/sports.controller";
import { IRoute } from "../interfaces/route.interface";

export class SportsRoute implements IRoute {
  public path = "/sports";
  public router = Router();
  private tasksController;
  constructor() {
    this.tasksController = new SportsController();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tasksController.get);
  }
}
