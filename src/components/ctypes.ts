import { Vector2 } from "three";

export type TypedArray = Float32Array | Float64Array;

export type MyVector2 = number[];
export type MyVector3 = number[];

export type Triangle = [MyVector2, MyVector2, MyVector2] | Vector2[];
