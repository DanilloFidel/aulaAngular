"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    DealershipCar.prototype.provideWorkingHours = function () {
        return "Seg a Sex  8:00 - 18:00 / Sab 8:00 - 12:00";
    };
    return DealershipCar;
}());
exports.default = DealershipCar;
