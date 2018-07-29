"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var CarDAO = /** @class */ (function () {
    function CarDAO() {
        this.tableName = "name_dealership";
    }
    CarDAO.prototype.insert = function (object) {
        //lógica de um insert
        console.log("logica de um INSERT");
        return true;
    };
    CarDAO.prototype.update = function (object) {
        console.log("logica UPDATE");
        return true;
    };
    CarDAO.prototype.remove = function (id) {
        console.log("logica REMOVE");
        return new Car_1.default("", 4);
    };
    CarDAO.prototype.select = function (id) {
        console.log("logica SELECT");
        return new Car_1.default("", 4);
    };
    CarDAO.prototype.selectAll = function () {
        console.log("SELECT *");
        return [new Car_1.default("", 4)];
    };
    return CarDAO;
}());
exports.CarDAO = CarDAO;
