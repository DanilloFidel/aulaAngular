import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Offer } from "../shared/offer.model";

import { OffersService } from "../offers.service";
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.css"],
  providers: [OffersService]
})
export class OfferComponent implements OnInit {
  public offer: Offer;
  
  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService,
    private shoppingCartService: ShoppingCartService
    ) {}
    
    ngOnInit() {
     
    this.route.params.subscribe((parameters: Params)=>{
      this.offerService
      .getOfferById(this.route.snapshot.params["id"])
      .then((offer: Offer) => {
        this.offer = offer;
      });
      parameters.id
      })
      
    }

    public addItemToCart(): void{
      this.shoppingCartService.addItem(this.offer)
      this.shoppingCartService.showItens()
    }
  }
  