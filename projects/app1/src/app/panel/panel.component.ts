import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { Phrase } from "../shared/phrase.model";
import { PHRASES } from "./phrase-mock";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  public phrases: Phrase[] = PHRASES;
  public instruction: string = "Traduza a frase:";
  public answer: string =
    "Digite aqui a tradução, verifique os acentos e letras maiúsculas!";
  public turn: number = 0;
  public turnPhrase: Phrase;
  public progress: number = 0;
  public attempts: number = 4;
  @Output() public gameOver: EventEmitter<string> = new EventEmitter(); //create instance of EventEmitter

  constructor() {
    this.updateTurn();
  }

  ngOnInit() {}

  ngOnDestroy(): void {}
  //collect user answer
  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if (this.turnPhrase.ptbrPhrase == this.answer) {
      this.turn++;
      //console.log(this.turnPhrase); //for debug
      //modify the progress bar
      this.progress += 100 / this.phrases.length;
      //verify if conclude
      if (this.turn === 10) {
        this.gameOver.emit("win");
      }
      //update object
      this.updateTurn();
    } else {
      this.attempts--;
      if (this.attempts === -1) {
        this.gameOver.emit("lose");
      }
    }
  }

  public updateTurn(): void {
    //define the turn phrase follow the logic on line :29
    this.turnPhrase = this.phrases[this.turn];
    //clean attribute answer
    this.answer = "";
  }
}
