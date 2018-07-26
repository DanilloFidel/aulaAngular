class Car {
  private model: string;
  private numberOfDoors: number;
  private speed: number = 0;

  constructor(model: string, doors: number) {
    this.model = model;
    this.numberOfDoors = doors;
  }

  public acelerate(): void {
    this.speed += 10;
  }
  public stop(): void {
    this.speed = 0;
  }

  public currentSpeed(): number {
    return this.speed;
  }
}

class DealershipCar {
  private adress: string;
  private carList: Array<Car>;

  constructor(adress: string, list: Array<Car>) {
    this.adress = adress;
    this.carList = list;
  }

  public showAdress(): string {
    return this.adress;
  }

  public showCarList(): Array<Car> {
    return this.carList;
  }
}

class People {
  private name: string;
  private favoriteCar: string;
  private car: Car;

  constructor(name: string, favorite: string) {
    this.name = name;
    this.favoriteCar = favorite;
  }

  public sayName(): string {
    return this.name;
  }

  public sayFavoriteCar(): string {
    return this.favoriteCar;
  }

  public buyCar(car: Car): void {
    this.car = car;
  }

  public sayWhatCarHave(): Car {
    return this.car;
  }
}

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
