import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from "../../offers.service";

@Component({
  selector: "app-how-to-use",
  templateUrl: "./how-to-use.component.html",
  styleUrls: ["./how-to-use.component.css"],
  providers: [OffersService]
})
export class HowToUseComponent implements OnInit {
  public desc: string = "";
  constructor(
    private offerService: OffersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe((parameters: Params)=>{
      this.offerService
      .getHowtoUseById(this.route.parent.snapshot.params["id"])
      .then((response: any) => {
        this.desc = response;
      });
      parameters.id
    })
  }
}
