"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionsRoute = void 0;
var express_1 = require("express");
var competitions_controller_1 = require("../controllers/competitions.controller");
var CompetitionsRoute = /** @class */ (function () {
    function CompetitionsRoute() {
        this.path = "/competition";
        this.router = (0, express_1.Router)();
        this.CompetitionsController = new competitions_controller_1.CompetitionsController();
        this.initializeRoutes();
    }
    CompetitionsRoute.prototype.initializeRoutes = function () {
        this.router.get("".concat(this.path), this.CompetitionsController.get);
    };
    return CompetitionsRoute;
}());
exports.CompetitionsRoute = CompetitionsRoute;
