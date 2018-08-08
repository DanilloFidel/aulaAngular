import { Component, OnInit } from "@angular/core";
import { OffersService } from "../offers.service";
import { Offer } from "../shared/offer.model";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.css"],
  providers: [OffersService]
})
export class RestaurantComponent implements OnInit {
  public offers: Offer[];
  constructor(private offerService: OffersService) {}

  ngOnInit() {
    this.offerService
      .getOffersByCategory("restaurante")
      .then((offers: Offer[]) => {
        console.log(offers);
        this.offers = offers;
      });
  }
}
