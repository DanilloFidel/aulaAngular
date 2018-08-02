import { Component, OnInit, EventEmitter, Output } from "@angular/core";
//importing the classes of Names
import { NAMES } from "./name-mock";
import { Name } from "../shared/name.model";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  public instruction: string = "Quem é esse personagem??";
  //create attribute to receive the arrays of names
  public names: Name[] = NAMES;
  public nameNumber: number = 1;
  public nameSrc: string;
  public answer: string;
  public turnPerson: Name;
  public turn: number = 0;
  public progress: number = 0;
  public attempts: number = 3;
  public msg: string = "";
  @Output() public endOfGame: EventEmitter<string> = new EventEmitter(); //create instance of EventEmitter

  constructor() {
    this.updateTurn();
    this.nameSrc = `../../assets/${this.nameNumber}.png`;
  }

  ngOnInit() {}

  public caughtAnswer(answer: Event): void {
    //object -> target -> value
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public changeSrc(): string {
    return this.nameSrc;
  }

  public checkAnswer(): void {
    if (this.turnPerson.nameAswer === this.answer) {
      this.turn++;
      this.nameNumber++;
      this.msg = "";
      //update progress bar
      this.progress += 100 / this.names.length;
      //verify if conclude
      if (this.turn == this.names.length) {
        this.endOfGame.emit("win");
      }
      //change image src/////////
      this.nameSrc = `../../assets/${this.nameNumber}.png`;
      //change the turn
      this.updateTurn();
    } else {
      this.attempts--;
      this.answer = "";
      this.msg = "Você errou, tente novamente!";
      if (this.attempts == -1) {
        this.endOfGame.emit("lose");
      }
    }
  }

  public updateTurn(): void {
    this.turnPerson = this.names[this.turn];
    this.answer = "";
  }
}
