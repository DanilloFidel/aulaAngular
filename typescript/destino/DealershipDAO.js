"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dealership_1 = __importDefault(require("./Dealership"));
var DealershipDAO = /** @class */ (function () {
    function DealershipDAO() {
        this.tableName = "name_dealership";
    }
    DealershipDAO.prototype.insert = function (object) {
        //lógica de um insert
        console.log("logica de um INSERT");
        return true;
    };
    DealershipDAO.prototype.update = function (object) {
        console.log("logica UPDATE");
        return true;
    };
    DealershipDAO.prototype.remove = function (id) {
        console.log("logica REMOVE");
        return new Dealership_1.default("", []);
    };
    DealershipDAO.prototype.select = function (id) {
        console.log("logica SELECT");
        return new Dealership_1.default("", []);
    };
    DealershipDAO.prototype.selectAll = function () {
        console.log("SELECT *");
        return [new Dealership_1.default("", [])];
    };
    return DealershipDAO;
}());
exports.DealershipDAO = DealershipDAO;
