import { Component, OnInit } from "@angular/core";
import { Car, CardOptions } from "@shared/desc-card/car";
import { Button } from "protractor";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public card_1 = new Car(<CardOptions>{
    link: "this-site",
    Title: "Hello, This Is My Website.",
    Desc: "Currently made with angular 8 and is served with AWS"
  });
  public card_2 = new Car(<CardOptions>{
    Title: "I'm a Web Developer.",
    Desc:
      "I currently working as a proffessional web developer with 5 years experience."
  });
  public card_3 = new Car(<CardOptions>{
    Title: "I Work With Many Tools.",
    Desc:
      "I have worked with a wide range of tools and languages over the past few years."
  });
  constructor() {}

  ngOnInit() {}
}
