"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var App = /** @class */ (function () {
    function App(routes) {
        this.app = (0, express_1.default)();
        this.port = 2000;
        this.initializeMiddleWares();
        this.initializeRoutes(routes);
    }
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("started listening on ".concat(_this.port));
        });
    };
    App.prototype.initializeMiddleWares = function () {
        this.app.use((0, cors_1.default)());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.initializeRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            _this.app.use('/', route.router);
        });
    };
    return App;
}());
exports.default = App;
