// deno-lint-ignore-file no-empty-enum no-empty-interface
// This file is for types exposed as part of the API.

import { Pointer } from "./pointers.ts";

// Simple types

export type Constructor<T> = (...args: unknown[]) => T;

export enum i8 {}
export const I8 = Symbol("i8");
export enum u8 {}
export const U8 = Symbol("u8");
export enum i16 {}
export const I16 = Symbol("i16");
export enum u16 {}
export const U16 = Symbol("u16");
export enum i32 {}
export const I32 = Symbol("i32");
export enum u32 {}
export const U32 = Symbol("u32");
export enum i64 {}
export const I64 = Symbol("i64");
export enum u64 {}
export const U64 = Symbol("u64");
export enum f32 {}
export const F32 = Symbol("f32");
export enum f64 {}
export const F64 = Symbol("f64");
export enum int {}
export const Int = Symbol("int");

export type PointerValue<T> = number | bigint;

export type PrimitiveType =
  | i8
  | u8
  | i16
  | u16
  | i32
  | u32
  | i64
  | u64
  | f32
  | f64
  | int;

export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

// Complex types

export type AllocatableStructConstructor<T extends AllocatableStruct> = {
  SIZE_IN_BYTES: number;
  of(data: Uint8Array): T;
};

export interface AllocatableStruct extends Struct {}

export type BoxableValue = number | PointerValue<unknown> | PrimitiveType | Struct;

export type BoxableValueConstructor =
  | typeof Number
  | typeof Pointer
  | {
    SIZE_IN_BYTES: number;
    of(data: PointerValue<Struct>): Struct;
  };

// TODO: Move this to it's own file as it's not generic and SDL specific.
export type RWMode = "a" | "a+" | "r" | "r+" | "w" | "w+" | "ab" | "ab+" | "rb" | "rb+" | "wb" | "wb+";

export interface StructConstructor<T extends Struct> {
  SIZE_IN_BYTES: number;
  of(data: PointerValue<T>): T;
}

export interface Struct {}
