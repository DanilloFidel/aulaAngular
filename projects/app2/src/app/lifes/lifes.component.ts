import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Lifes } from "../shared/lifes.model";

@Component({
  selector: "app-lifes",
  templateUrl: "./lifes.component.html",
  styleUrls: ["./lifes.component.css"]
})
export class LifesComponent implements OnInit, OnChanges {
  @Input() public attempts: number;
  public hearths: Lifes[] = [new Lifes(true), new Lifes(true), new Lifes(true)];

  constructor() {}

  ngOnChanges() {
    if (this.attempts != this.hearths.length) {
      let i = this.hearths.length - this.attempts;
      this.hearths[i - 1].full = false;
    }
  }

  ngOnInit() {}
}
