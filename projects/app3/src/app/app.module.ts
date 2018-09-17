import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { FunComponent } from "./fun/fun.component";
import { ROUTES } from "./app.routes";
import { OfferComponent } from "./offer/offer.component";
import { HowToUseComponent } from "./offer/how-to-use/how-to-use.component";
import { WhereIsComponent } from "./offer/where-is/where-is.component";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

//pipes
import { ShortDescription } from "./util/short-desc.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantComponent,
    FunComponent,
    OfferComponent,
    HowToUseComponent,
    WhereIsComponent,
    ShortDescription
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(ROUTES)],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
