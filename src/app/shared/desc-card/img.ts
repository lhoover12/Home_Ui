export class Img {
  link?: string;
  src: string;
  alt?: string;

  constructor(imgOptions: ImgOptions) {
    this.link = imgOptions.link || null;
    this.src = imgOptions.src || null;
    this.alt = imgOptions.alt || null;
  }
}
export interface ImgOptions {
  link?: string;
  src: string;
  alt?: string;
}
