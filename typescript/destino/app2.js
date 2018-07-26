"use strict";
var Car = /** @class */ (function () {
    function Car(model, doors) {
        this.speed = 0;
        this.model = model;
        this.numberOfDoors = doors;
    }
    Car.prototype.acelerate = function () {
        this.speed += 10;
    };
    Car.prototype.stop = function () {
        this.speed = 0;
    };
    Car.prototype.currentSpeed = function () {
        return this.speed;
    };
    return Car;
}());
var DealershipCar = /** @class */ (function () {
    function DealershipCar(adress, list) {
        this.adress = adress;
        this.carList = list;
    }
    DealershipCar.prototype.showAdress = function () {
        return this.adress;
    };
    DealershipCar.prototype.showCarList = function () {
        return this.carList;
    };
    return DealershipCar;
}());
var People = /** @class */ (function () {
    function People(name, favorite) {
        this.name = name;
        this.favoriteCar = favorite;
    }
    People.prototype.sayName = function () {
        return this.name;
    };
    People.prototype.sayFavoriteCar = function () {
        return this.favoriteCar;
    };
    People.prototype.buyCar = function (car) {
        this.car = car;
    };
    People.prototype.sayWhatCarHave = function () {
        return this.car;
    };
    return People;
}());
/* create cars */
var car1 = new Car("Land Rover", 4);
var car2 = new Car("Maveric", 2);
var car3 = new Car("Ferrari", 2);
var car4 = new Car("Fusca", 2);
var car5 = new Car("Gol g5", 4);
var car6 = new Car("Camaro", 4);
var car7 = new Car("Limusine", 8);
/* car list */
var carList = [car1, car2, car3, car4, car5, car6, car7];
var dealershipCar = new DealershipCar("Av Paulista", carList);
/* buy car */
var p1 = new People("Zezinho", "Maveric");
dealershipCar.showCarList().map(function (car) {
    if (car["model"] == p1.sayFavoriteCar()) {
        p1.buyCar(car);
    }
});
console.log(p1.sayWhatCarHave());
