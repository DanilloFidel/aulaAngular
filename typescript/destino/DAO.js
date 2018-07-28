"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.tableName = "name_dealership";
    }
    Dao.prototype.insert = function (object) {
        //lógica de um insert
        console.log("logica de um INSERT");
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log("logica UPDATE");
        return true;
    };
    Dao.prototype.remove = function (id) {
        console.log("logica REMOVE");
        return new People("", "");
    };
    Dao.prototype.select = function (id) {
        console.log("logica SELECT");
        return new People("", "");
    };
    Dao.prototype.selectAll = function () {
        console.log("SELECT *");
        return [new People("", "")];
    };
    return Dao;
}());
exports.Dao = Dao;
