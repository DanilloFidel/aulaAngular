import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: string = "app";
  public isRuning: boolean = true;
  public end: string;

  public endOfGame(status: string): void {
    this.isRuning = false;
    this.end = status;
  }

  public restartGame(): void {
    this.isRuning = true;
    this.end = undefined;
  }
}
