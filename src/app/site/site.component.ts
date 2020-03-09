import { Component, OnInit } from "@angular/core";
import { Car, CardOptions } from "@shared/desc-card/car";
import { Img, ImgOptions } from "@shared/desc-card/Img";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"]
})
export class SiteComponent implements OnInit {
  public hosted = new Car(<CardOptions>{
    Title: "Hosted using AWS",
    Desc: "Staticly hosted on AWS S3 using Cloudfront edge routing",
    svg: ""
  });
  public angular = new Car(<CardOptions>{
    Title: "Built with Angular",
    Desc: "Built with Anuglar 9 and uses angular/material for some styling",
    svg: ""
  });
  public deploy = new Car(<CardOptions>{
    Title: "Deployed With Travis",
    Desc: "Deployed using Travis CI and github hooks",
    svg: ""
  });

  public Travis = new Img(<ImgOptions>{
    link: "https://about.travis-ci.com/",
    src: "/assets/TravisCI-Full-Color.png",
    alt: "Powered Travis CI"
  });
  public Angular = new Img(<ImgOptions>{
    link: "https://angular.io/",
    src: "/assets/angular.png",
    alt: "Powered by the Angular Framework"
  });

  public AWS = new Img(<ImgOptions>{
    link: "https://aws.amazon.com/what-is-cloud-computing",
    src: "https://d0.awsstatic.com/logos/powered-by-aws.png",
    alt: "Powered by AWS Cloud Computing"
  });
  constructor() {}

  ngOnInit() {
    window.scroll(0, 0);
  }
}
