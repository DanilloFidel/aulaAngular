"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = __importDefault(require("./People"));
var PeopleDAO = /** @class */ (function () {
    function PeopleDAO() {
        this.tableName = "name_dealership";
    }
    PeopleDAO.prototype.insert = function (object) {
        //lógica de um insert
        console.log("logica de um INSERT");
        return true;
    };
    PeopleDAO.prototype.update = function (object) {
        console.log("logica UPDATE");
        return true;
    };
    PeopleDAO.prototype.remove = function (id) {
        console.log("logica REMOVE");
        return new People_1.default("", "");
    };
    PeopleDAO.prototype.select = function (id) {
        console.log("logica SELECT");
        return new People_1.default("", "");
    };
    PeopleDAO.prototype.selectAll = function () {
        console.log("SELECT *");
        return [new People_1.default("", "")];
    };
    return PeopleDAO;
}());
exports.PeopleDAO = PeopleDAO;
