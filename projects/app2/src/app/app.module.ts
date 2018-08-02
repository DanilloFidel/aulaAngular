import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PanelComponent } from "./panel/panel.component";
import { LifesComponent } from "./lifes/lifes.component";
import { ProgressComponent } from "./progress/progress.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelComponent,
    LifesComponent,
    ProgressComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
