import Car from "./Car";
import Motorcycle from "./Moto";
import DealershipCar from "./Dealership";
import People from "./People";

/* create cars */

let car1 = new Car("Land Rover", 4);
let car2 = new Car("Maveric", 2);
let car3 = new Car("Ferrari", 2);
let car4 = new Car("Fusca", 2);
let car5 = new Car("Gol g5", 4);
let car6 = new Car("Camaro", 4);
let car7 = new Car("Limusine", 8);

/* car list */

let carList: Car[] = [car1, car2, car3, car4, car5, car6, car7];

let dealershipCar = new DealershipCar("Av Paulista", carList);

/* buy car */

let p1 = new People("Zezinho", "Maveric");

dealershipCar.showCarList().map((car: Car) => {
  if (car["model"] == p1.sayFavoriteCar()) {
    p1.buyCar(car);
  }
});

console.log(p1.sayWhatCarHave());

let curinga = new DealershipCar("", []);

console.log(curinga.provideWorkingHours());
