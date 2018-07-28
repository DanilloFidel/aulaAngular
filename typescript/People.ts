import Car from "./Car";
export default class People {
  private name: string;
  private favoriteCar: string;
  private car!: Car;

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
