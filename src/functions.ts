// This file is auto generated. To update the file make changes to the code generator.

import { Event } from "./events.ts";
import { Point, Rect, RWops, Surface, Window } from "./structs.ts";
import { Symbols, symbols } from "./symbols.ts";
import { RWMode } from "./types.ts";
import { fromCString, NULL_POINTER, toCString } from "./utils.ts";

interface SDLContext {
  library: Deno.DynamicLibrary<Symbols>;
  symbols: Deno.StaticForeignLibraryInterface<Symbols>;
}

const context: SDLContext = {
  // We don't want to check in every function if the
  // library has been loaded so the following are
  // set to null even though the type says it shouldn't
  // be null.
  library: null!,
  symbols: null!,
};

export function BlitScaled(
  src: Surface,
  srcrect: Rect | null,
  dst: Surface,
  dstrect: Rect | null,
): number {
  return context.symbols.SDL_UpperBlitScaled(
    src.pointer,
    srcrect?.pointer ?? NULL_POINTER,
    dst.pointer,
    dstrect?.pointer ?? NULL_POINTER,
  ) as number;
}

export function BlitSurface(
  src: Surface,
  srcrect: Rect | null,
  dst: Surface,
  dstrect: Rect | null,
): number {
  return context.symbols.SDL_UpperBlit(
    src.pointer,
    srcrect?.pointer ?? NULL_POINTER,
    dst.pointer,
    dstrect?.pointer ?? NULL_POINTER,
  ) as number;
}

export function CreateRGBSurfaceFrom(
  pixels: Deno.UnsafePointer,
  width: number,
  height: number,
  depth: number,
  pitch: number,
  Rmask: number,
  Gmask: number,
  Bmask: number,
  Amask: number,
): Surface {
  return new Surface(context.symbols.SDL_CreateRGBSurfaceFrom(
    pixels,
    width,
    height,
    depth,
    pitch,
    Rmask,
    Gmask,
    Bmask,
    Amask,
  ) as Deno.UnsafePointer);
}

export function CreateRGBSurfaceWithFormat(
  flags: number,
  width: number,
  height: number,
  depth: number,
  format: number,
): Surface {
  return new Surface(context.symbols.SDL_CreateRGBSurfaceWithFormat(
    flags,
    width,
    height,
    depth,
    format,
  ) as Deno.UnsafePointer);
}

export function CreateWindow(
  title: string,
  x: number,
  y: number,
  w: number,
  h: number,
  flags: number,
): Window {
  return context.symbols.SDL_CreateWindow(
    toCString(title),
    x,
    y,
    w,
    h,
    flags,
  ) as Window;
}

export function Delay(
  ms: number,
): void {
  context.symbols.SDL_Delay(
    ms,
  );
}

export function DestroyWindow(
  window: Window,
): void {
  context.symbols.SDL_DestroyWindow(
    window,
  );
}

export function FillRect(
  dst: Surface,
  rect: Rect | null,
  color: number,
): number {
  return context.symbols.SDL_FillRect(
    dst.pointer,
    rect?.pointer ?? NULL_POINTER,
    color,
  ) as number;
}

export function FreeSurface(
  surface: Surface,
): void {
  context.symbols.SDL_FreeSurface(
    surface.pointer,
  );
}

export function GetError(): string {
  return fromCString(context.symbols.SDL_GetError() as Deno.UnsafePointer);
}

export function GetWindowSurface(
  window: Window,
): Surface {
  return new Surface(context.symbols.SDL_GetWindowSurface(
    window,
  ) as Deno.UnsafePointer);
}

export function Init(flags: number, libraryPath?: string): number {
  // TODO: Improve this logic.
  if (!libraryPath) {
    libraryPath = "sdl2";
  }

  context.library = Deno.dlopen(libraryPath, symbols);
  context.symbols = context.library.symbols;

  return context.symbols.SDL_Init(flags) as number;
}

export function LoadBMP_RW(
  src: RWops,
  freesrc: number,
): Surface {
  return new Surface(context.symbols.SDL_LoadBMP_RW(
    src,
    freesrc,
  ) as Deno.UnsafePointer);
}

export function LockSurface(
  surface: Surface,
): number {
  return context.symbols.SDL_LockSurface(
    surface.pointer,
  ) as number;
}

export function MapRGB(
  format: Deno.UnsafePointer,
  r: number,
  g: number,
  b: number,
): number {
  return context.symbols.SDL_MapRGB(
    format,
    r,
    g,
    b,
  ) as number;
}

export function MapRGBA(
  format: Deno.UnsafePointer,
  r: number,
  g: number,
  b: number,
  a: number,
): number {
  return context.symbols.SDL_MapRGBA(
    format,
    r,
    g,
    b,
    a,
  ) as number;
}

export function PollEvent(
  event: Event,
): number {
  return context.symbols.SDL_PollEvent(
    event.pointer,
  ) as number;
}

export function Quit(): void {
  context.symbols.SDL_Quit();
  context.library.close();
}

export function RWFromFile(
  file: string,
  mode: RWMode,
): RWops {
  return context.symbols.SDL_RWFromFile(
    toCString(file),
    toCString(mode),
  ) as RWops;
}

export function UnlockSurface(
  surface: Surface,
): void {
  context.symbols.SDL_UnlockSurface(
    surface.pointer,
  );
}

export function UpdateWindowSurface(
  window: Window,
): number {
  return context.symbols.SDL_UpdateWindowSurface(
    window,
  ) as number;
}
