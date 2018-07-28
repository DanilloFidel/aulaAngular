import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
  private numberOfDoors: number;

  constructor(model: string, doors: number) {
    super();
    this.model = model;
    this.numberOfDoors = doors;
  }
}
