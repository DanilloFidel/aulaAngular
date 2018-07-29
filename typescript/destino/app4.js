"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("./DAO");
var Dealership_1 = __importDefault(require("./Dealership"));
var People_1 = __importDefault(require("./People"));
var Car_1 = __importDefault(require("./Car"));
var Moto_1 = __importDefault(require("./Moto"));
var cc1 = new Dealership_1.default("Joao XVIII", []);
var p1 = new People_1.default("José", "Mustang");
var m1 = new Moto_1.default(150);
var car1 = new Car_1.default("Fusca", 4);
var dao3 = new DAO_1.Dao();
dao3.insert(p1);
