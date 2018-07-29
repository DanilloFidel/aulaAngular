"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var Dealership_1 = __importDefault(require("./Dealership"));
var People_1 = __importDefault(require("./People"));
/* create cars */
var car1 = new Car_1.default("Land Rover", 4);
var car2 = new Car_1.default("Maveric", 2);
var car3 = new Car_1.default("Ferrari", 2);
var car4 = new Car_1.default("Fusca", 2);
var car5 = new Car_1.default("Gol g5", 4);
var car6 = new Car_1.default("Camaro", 4);
var car7 = new Car_1.default("Limusine", 8);
/* car list */
var carList = [car1, car2, car3, car4, car5, car6, car7];
var dealershipCar = new Dealership_1.default("Av Paulista", carList);
/* buy car */
var p1 = new People_1.default("Zezinho", "Maveric");
dealershipCar.showCarList().map(function (car) {
    if (car["model"] == p1.sayFavoriteCar()) {
        p1.buyCar(car);
    }
});
console.log(p1.sayWhatCarHave());
var curinga = new Dealership_1.default("", []);
console.log(curinga.provideWorkingHours());
