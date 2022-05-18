// This file is auto generated. To update the file make changes to the code generator.

import { ArrayOrPointerView, Pointer } from "./utils.ts";

export type BlitMap = Pointer<unknown>;
export type PixelFormat = Pointer<unknown>;
export type RWops = Pointer<unknown>;
export type Window = Pointer<unknown>;

export class Point {
  public static SIZE_IN_BYTES = 8;

  private _data: Uint8Array | Pointer<Point>;
  private _view: ArrayOrPointerView;

  constructor();
  constructor(data: Uint8Array);
  constructor(data: Pointer<Point>);
  constructor(data: Partial<Point>);
  constructor(x: number, y: number);
  constructor(_1?: Uint8Array | Pointer<Point> | Partial<Point> | number, _2?: number) {
    if (_1 instanceof Uint8Array || _1 instanceof Pointer) {
      this._data = _1;
      this._view = new ArrayOrPointerView(this._data);
    } else {
      this._data = new Uint8Array(Rect.SIZE_IN_BYTES);
      this._view = new ArrayOrPointerView(this._data);

      if (_1 !== undefined) {
        if (_2 === undefined) {
          Object.assign(this, _1);
        } else {
          this.x = _1 as number;
          this.y = _2 as number;
        }
      }
    }
  }

  public get pointer(): Pointer<Point> {
    return this._view.pointer;
  }

  public get x(): number {
    return this._view.getInt32(0);
  }

  public set x(value: number) {
    this._view.setInt32(0, value);
  }

  public get y(): number {
    return this._view.getInt32(4);
  }

  public set y(value: number) {
    this._view.setInt32(4, value);
  }
}

export class Rect {
  public static SIZE_IN_BYTES = 16;

  private _data: Uint8Array | Pointer<Rect>;
  private _view: ArrayOrPointerView;

  constructor();
  constructor(data: Uint8Array);
  constructor(data: Pointer<Rect>);
  constructor(data: Partial<Rect>);
  constructor(x: number, y: number, w: number, h: number);
  constructor(_1?: Uint8Array | Pointer<Rect> | Partial<Rect> | number, _2?: number, _3?: number, _4?: number) {
    if (_1 instanceof Uint8Array || _1 instanceof Pointer) {
      this._data = _1;
      this._view = new ArrayOrPointerView(this._data);
    } else {
      this._data = new Uint8Array(Rect.SIZE_IN_BYTES);
      this._view = new ArrayOrPointerView(this._data);

      if (_1 !== undefined) {
        if (_2 === undefined) {
          Object.assign(this, _1);
        } else {
          this.x = _1 as number;
          this.y = _2 as number;
          this.w = _3 as number;
          this.h = _4 as number;
        }
      }
    }
  }

  public get pointer(): Pointer<Rect> {
    return this._view.pointer;
  }

  public get x(): number {
    return this._view.getInt32(0);
  }

  public set x(value: number) {
    this._view.setInt32(0, value);
  }

  public get y(): number {
    return this._view.getInt32(4);
  }

  public set y(value: number) {
    this._view.setInt32(4, value);
  }

  public get w(): number {
    return this._view.getInt32(8);
  }

  public set w(value: number) {
    this._view.setInt32(8, value);
  }

  public get h(): number {
    return this._view.getInt32(12);
  }

  public set h(value: number) {
    this._view.setInt32(12, value);
  }
}

export class Surface {
  public static SIZE_IN_BYTES = 96;

  private _data: Pointer<Surface>;
  private _view: ArrayOrPointerView;

  constructor(data: Pointer<Surface>) {
    this._data = data;
    this._view = new ArrayOrPointerView(this._data);
  }

  public get pointer(): Pointer<Surface> {
    return this._data;
  }

  public get flags(): number {
    return this._view.getUint32(0);
  }

  public get format(): Pointer<PixelFormat> {
    return new Pointer(this._view.getBigUint64(8));
  }

  public get w(): number {
    return this._view.getInt32(16);
  }

  public get h(): number {
    return this._view.getInt32(20);
  }

  public get pitch(): number {
    return this._view.getInt32(24);
  }

  public get pixels(): Pointer<void> {
    return new Pointer(this._view.getBigUint64(32));
  }

  public get userdata(): Pointer<void> {
    return new Pointer(this._view.getBigUint64(40));
  }

  public get locked(): number {
    return this._view.getInt32(48);
  }

  public get list_blitmap(): Pointer<void> {
    return new Pointer(this._view.getBigUint64(56));
  }

  public get clip_rect(): Rect {
    return new Rect(this._view.getArray(16, 64));
  }

  public get map(): Pointer<BlitMap> {
    return new Pointer(this._view.getBigUint64(80));
  }

  public get refcount(): number {
    return this._view.getInt32(88);
  }
}
