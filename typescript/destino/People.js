"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = People;
