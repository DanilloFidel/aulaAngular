export default class Vehicle {
  protected model!: string;
  protected speed: number = 0;

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
