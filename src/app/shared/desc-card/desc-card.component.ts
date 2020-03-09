import { Car } from "./car";
import { Img } from "./img";
import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Input
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-desc-card",
  templateUrl: "./desc-card.component.html",

  styleUrls: ["./desc-card.component.scss"],
  animations: [
    trigger("scrollAnimation", [
      state(
        "show",
        style({
          opacity: 1,
          transform: "translateX(0)"
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          transform: "translateX(-100%)"
        })
      ),
      transition("show => hide", animate("700ms ease-out")),
      transition("hide => show", animate("700ms ease-in"))
    ])
  ]
})
export class DescCardComponent implements OnInit {
  state = "hide";
  constructor(public el: ElementRef) {}
  href: string;
  @Input("card") card: Car;

  @Input("img") img: Img;

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    if (this.state === "hide") {
      const componentPosition =
        this.el.nativeElement.offsetTop -
        this.el.nativeElement.offsetHeight -
        0;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition >= componentPosition) {
        this.state = "show";
      }
    }
  }

  ngOnInit() {}
}
