import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Hearth } from "../shared/hearth.model";

@Component({
  selector: "app-attempts",
  templateUrl: "./attempts.component.html",
  styleUrls: ["./attempts.component.css"]
})
export class AttemptsComponent implements OnInit, OnChanges {
  @Input() public attempts: number;
  public hearths: Hearth[] = [
    new Hearth(true),
    new Hearth(true),
    new Hearth(true),
    new Hearth(true)
  ];
  constructor() {}

  ngOnChanges() {
    if (this.attempts !== this.hearths.length) {
      let i = this.hearths.length - this.attempts;
      this.hearths[i - 1].full = false;
    }
  }

  ngOnInit() {}
}
