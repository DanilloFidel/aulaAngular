"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotorbykeDAO = /** @class */ (function () {
    function MotorbykeDAO() {
        this.tableName = "name_dealership";
    }
    MotorbykeDAO.prototype.insert = function (object) {
        //lógica de um insert
        console.log("logica de um INSERT");
        return true;
    };
    MotorbykeDAO.prototype.update = function (object) {
        console.log("logica UPDATE");
        return true;
    };
    MotorbykeDAO.prototype.remove = function (id) {
        console.log("logica REMOVE");
        return new Moto_1.default(150);
    };
    MotorbykeDAO.prototype.select = function (id) {
        console.log("logica SELECT");
        return new Moto_1.default(150);
    };
    MotorbykeDAO.prototype.selectAll = function () {
        console.log("SELECT *");
        return [new Moto_1.default(150)];
    };
    return MotorbykeDAO;
}());
exports.MotorbykeDAO = MotorbykeDAO;
