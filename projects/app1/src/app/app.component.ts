import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public runingGame: boolean = true;
  public ending: string;

  public gameOver(type: string): void {
    this.runingGame = false;
    this.ending = type;
  }

  public restartGame(): void {
    this.runingGame = true;
    this.ending = undefined;
  }
}
