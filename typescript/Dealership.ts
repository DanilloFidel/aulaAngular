import Car from "./Car";
import { DealershipCarInterface } from "./DealershipInterface";
export default class DealershipCar implements DealershipCarInterface {
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

  public provideWorkingHours(): string {
    return "Seg a Sex  8:00 - 18:00 / Sab 8:00 - 12:00";
  }
}
