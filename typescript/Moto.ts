import Vehicle from "./Vehicle";

class Motorbyke extends Vehicle {
  private cc: number;
  constructor(cc: number) {
    super();
    this.cc = cc;
  }
  public acelerate(): void {
    this.speed += 10 * this.cc;
  }
}

export default Motorbyke;
