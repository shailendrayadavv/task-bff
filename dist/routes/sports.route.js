"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsRoute = void 0;
var express_1 = require("express");
var sports_controller_1 = require("../controllers/sports.controller");
var SportsRoute = /** @class */ (function () {
    function SportsRoute() {
        this.path = "/sports";
        this.router = (0, express_1.Router)();
        this.tasksController = new sports_controller_1.SportsController();
        this.initializeRoutes();
    }
    SportsRoute.prototype.initializeRoutes = function () {
        this.router.get("".concat(this.path), this.tasksController.get);
    };
    return SportsRoute;
}());
exports.SportsRoute = SportsRoute;
