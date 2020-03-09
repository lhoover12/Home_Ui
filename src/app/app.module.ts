import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { DescCardComponent } from "@shared/desc-card/desc-card.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { ToolsComponent } from "./tools/tools.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SiteComponent } from "./site/site.component";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DescCardComponent,
    HomeComponent,

    ToolsComponent,
    AboutMeComponent,
    SiteComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
