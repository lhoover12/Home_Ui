export class Car {
  Title?: string;
  Desc?: string;
  link?: string;
  svg?: string;

  constructor(cardOptions: CardOptions) {
    this.link = cardOptions.link || null;
    this.Desc = cardOptions.Desc || null;
    this.Title = cardOptions.Title || null;
    this.svg = cardOptions.svg || null;
  }
}
export interface CardOptions {
  Title: string;
  Desc: string;
  link?: string;
  svg?: string;
}
