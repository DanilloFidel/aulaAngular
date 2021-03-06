import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from "../../offers.service";

@Component({
  selector: "app-where-is",
  templateUrl: "./where-is.component.html",
  styleUrls: ["./where-is.component.css"],
  providers: [OffersService]
})
export class WhereIsComponent implements OnInit, OnDestroy {
  public howUse: string = "";

  constructor(
    private offerService: OffersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe((parameters: Params)=>{
      this.offerService
      .getWhereIsById(this.route.parent.snapshot.params["id"])
      .then((response: any) => {
        this.howUse = response;
      });
      parameters.id
    })
  }

  ngOnDestroy() {}
}
