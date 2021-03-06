import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"]
})
export class ProgressComponent implements OnInit {
  @Input() public progress: number = 0;
  public widthBar: string;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(data) {
    this.progress = data.progress.currentValue;
    this.widthBar = `${this.progress}%`;
  }
}
