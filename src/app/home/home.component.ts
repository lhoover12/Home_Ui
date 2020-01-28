import { Component, OnInit } from "@angular/core";
import { Car } from "./car";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public card_1: Car;
  public card_2: Car;
  public card_3: Car;
  constructor() {}

  ngOnInit() {
    this.card_1 = new Car(
      "Hello, this is my website",
      "Currently made with angular 8 and is served with AWS",
      "f"
    );
    this.card_2 = new Car(
      "I'm a Web developer",
      "I currently working as a proffessional web developer with 5 years experience.",
      "f"
    );
    this.card_3 = new Car(
      "Work with many tools",
      "I have worked with a wide range of tools and languages over the past few years.",
      "f"
    );
  }
}
