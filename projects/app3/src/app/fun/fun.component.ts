import { Component, OnInit } from "@angular/core";
import { OffersService } from "../offers.service";
import { Offer } from "../shared/offer.model";

@Component({
  selector: "app-fun",
  templateUrl: "./fun.component.html",
  styleUrls: ["./fun.component.css"],
  providers: [OffersService]
})
export class FunComponent implements OnInit {
  public offers: Offer[];
  constructor(private offerService: OffersService) {}

  ngOnInit() {
    this.offerService
      .getOffersByCategory("diversao")
      .then((offers: Offer[]) => {
        this.offers = offers;
      });
  }
}
