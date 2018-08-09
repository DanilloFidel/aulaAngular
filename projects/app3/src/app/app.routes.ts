//primeiro importa Route
import { Routes } from "@angular/router";
//segundo importa os módulos
import { HomeComponent } from "./home/home.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { FunComponent } from "./fun/fun.component";
import { OfferComponent } from "./offer/offer.component";
import { HowToUseComponent } from "./offer/how-to-use/how-to-use.component";
import { WhereIsComponent } from "./offer/where-is/where-is.component";

export const ROUTES: Routes = [
  //cria-se os caminhos
  { path: "", component: HomeComponent },
  { path: "restaurantes", component: RestaurantComponent },
  { path: "diversao", component: FunComponent },
  { path: "oferta", component: HomeComponent },
  {
    path: "oferta/:id",
    component: OfferComponent,
    children: [
      { path: "", component: HowToUseComponent },
      { path: "como-usar", component: HowToUseComponent },
      { path: "onde-fica", component: WhereIsComponent }
    ]
  }
];
