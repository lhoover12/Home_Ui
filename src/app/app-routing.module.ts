import { AboutMeComponent } from "./about-me/about-me.component";
import { ToolsComponent } from "./tools/tools.component";
import { SiteComponent } from "./site/site.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  { path: "this-site", component: SiteComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "tools", component: ToolsComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
