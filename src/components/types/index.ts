import { Vector2 } from "three";
import { StaticImageData } from "next/image";

export type TypedArray = Float32Array | Float64Array;

export type MyVector2 = number[];
export type MyVector3 = number[];

export type Triangle = [MyVector2, MyVector2, MyVector2] | Vector2[];

export type workSection = {
  company: string;
  title: string;
  desc: Array<string>;
  timeFrame: string;
  image: StaticImageData;
};

export type projectData = {
  title: string;
  techStack: Array<string>;
  url_link: string;
  git_link: string;
  desc: string;
  imageUrl: StaticImageData;
  features: Array<string>;
};
