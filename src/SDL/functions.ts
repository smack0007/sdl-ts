// This file is auto generated. To update the file make changes to the code generator.

import { Event } from "./events.ts";
import { BlitMap, PixelFormat, Point, Rect, Renderer, RWops, Surface, Texture, Window } from "./structs.ts";
import { Symbols, symbols } from "./symbols.ts";
import { RWMode, TypedArray } from "../types.ts";
import { Pointer, PointerTarget } from "../types.ts";
import { DataPointer, fromCString, NULL_POINTER, setPointerTarget, toCString } from "../_utils.ts";

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
  src: Pointer<Surface>,
  srcrect: Pointer<Rect> | null,
  dst: Pointer<Surface>,
  dstrect: Pointer<Rect> | null,
): number {
  return context.symbols.SDL_UpperBlitScaled(
    (src as DataPointer<Surface>)._pointer,
    (srcrect as DataPointer<Rect> | null)?._pointer ?? NULL_POINTER,
    (dst as DataPointer<Surface>)._pointer,
    (dstrect as DataPointer<Rect> | null)?._pointer ?? NULL_POINTER,
  ) as number;
}

export function BlitSurface(
  src: Pointer<Surface>,
  srcrect: Pointer<Rect> | null,
  dst: Pointer<Surface>,
  dstrect: Pointer<Rect> | null,
): number {
  return context.symbols.SDL_UpperBlit(
    (src as DataPointer<Surface>)._pointer,
    (srcrect as DataPointer<Rect> | null)?._pointer ?? NULL_POINTER,
    (dst as DataPointer<Surface>)._pointer,
    (dstrect as DataPointer<Rect> | null)?._pointer ?? NULL_POINTER,
  ) as number;
}

export function CreateRenderer(
  window: Pointer<Window>,
  index: number,
  flags: number,
): Pointer<Renderer> {
  return new DataPointer<Renderer>(
    context.symbols.SDL_CreateRenderer(
      (window as DataPointer<Window>)._pointer,
      index,
      flags,
    ) as Deno.UnsafePointer,
    Renderer,
  );
}

export function CreateRGBSurfaceFrom(
  pixels: TypedArray,
  width: number,
  height: number,
  depth: number,
  pitch: number,
  Rmask: number,
  Gmask: number,
  Bmask: number,
  Amask: number,
): Pointer<Surface> {
  return new DataPointer<Surface>(
    context.symbols.SDL_CreateRGBSurfaceFrom(
      Deno.UnsafePointer.of(pixels),
      width,
      height,
      depth,
      pitch,
      Rmask,
      Gmask,
      Bmask,
      Amask,
    ) as Deno.UnsafePointer,
    Surface,
  );
}

export function CreateRGBSurfaceWithFormat(
  flags: number,
  width: number,
  height: number,
  depth: number,
  format: number,
): Pointer<Surface> {
  return new DataPointer<Surface>(
    context.symbols.SDL_CreateRGBSurfaceWithFormat(
      flags,
      width,
      height,
      depth,
      format,
    ) as Deno.UnsafePointer,
    Surface,
  );
}

export function CreateTexture(
  renderer: Pointer<Renderer>,
  format: number,
  access: number,
  w: number,
  h: number,
): Pointer<Texture> {
  return new DataPointer<Texture>(
    context.symbols.SDL_CreateTexture(
      (renderer as DataPointer<Renderer>)._pointer,
      format,
      access,
      w,
      h,
    ) as Deno.UnsafePointer,
    Texture,
  );
}

export function CreateWindow(
  title: string,
  x: number,
  y: number,
  w: number,
  h: number,
  flags: number,
): Pointer<Window> {
  return new DataPointer<Window>(
    context.symbols.SDL_CreateWindow(
      toCString(title),
      x,
      y,
      w,
      h,
      flags,
    ) as Deno.UnsafePointer,
    Window,
  );
}

export function CreateWindowAndRenderer(
  width: number,
  height: number,
  window_flags: number,
  window: PointerTarget<Window>,
  renderer: PointerTarget<Renderer>,
): number {
  const windowDoublePointer = new BigUint64Array(1);
  const rendererDoublePointer = new BigUint64Array(1);

  const result = context.symbols.SDL_CreateWindowAndRenderer(
    width,
    height,
    window_flags,
    windowDoublePointer,
    rendererDoublePointer,
  ) as number;

  setPointerTarget(window, new DataPointer<Window>(windowDoublePointer[0]));
  setPointerTarget(renderer, new DataPointer<Renderer>(rendererDoublePointer[0]));

  return result;
}

export function Delay(
  ms: number,
): void {
  context.symbols.SDL_Delay(
    ms,
  );
}

export function DestroyRenderer(
  renderer: Pointer<Renderer>,
): void {
  context.symbols.SDL_DestroyRenderer(
    (renderer as DataPointer<Renderer>)._pointer,
  );
}

export function DestroyTexture(
  texture: Pointer<Texture>,
): void {
  context.symbols.SDL_DestroyTexture(
    (texture as DataPointer<Texture>)._pointer,
  );
}

export function DestroyWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_DestroyWindow(
    (window as DataPointer<Window>)._pointer,
  );
}

export function FillRect(
  dst: Pointer<Surface>,
  rect: Pointer<Rect> | null,
  color: number,
): number {
  return context.symbols.SDL_FillRect(
    (dst as DataPointer<Surface>)._pointer,
    (rect as DataPointer<Rect> | null)?._pointer ?? NULL_POINTER,
    color,
  ) as number;
}

export function FreeSurface(
  surface: Pointer<Surface>,
): void {
  context.symbols.SDL_FreeSurface(
    (surface as DataPointer<Surface>)._pointer,
  );
}

export function GetError(): string {
  return fromCString(context.symbols.SDL_GetError() as Deno.UnsafePointer);
}

export function GetSystemRAM(): number {
  return context.symbols.SDL_GetSystemRAM() as number;
}

export function GetTicks(): number {
  return context.symbols.SDL_GetTicks() as number;
}

export function GetTicks64(): bigint {
  return context.symbols.SDL_GetTicks64() as unknown as bigint;
}

export function GetWindowSurface(
  window: Pointer<Window>,
): Pointer<Surface> {
  return new DataPointer<Surface>(
    context.symbols.SDL_GetWindowSurface(
      (window as DataPointer<Window>)._pointer,
    ) as Deno.UnsafePointer,
    Surface,
  );
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
  src: Pointer<RWops>,
  freesrc: number,
): Pointer<Surface> {
  return new DataPointer<Surface>(
    context.symbols.SDL_LoadBMP_RW(
      (src as DataPointer<RWops>)._pointer,
      freesrc,
    ) as Deno.UnsafePointer,
    Surface,
  );
}

export function LockSurface(
  surface: Pointer<Surface>,
): number {
  return context.symbols.SDL_LockSurface(
    (surface as DataPointer<Surface>)._pointer,
  ) as number;
}

export function MapRGB(
  format: Pointer<PixelFormat>,
  r: number,
  g: number,
  b: number,
): number {
  return context.symbols.SDL_MapRGB(
    (format as DataPointer<PixelFormat>)._pointer,
    r,
    g,
    b,
  ) as number;
}

export function MapRGBA(
  format: Pointer<PixelFormat>,
  r: number,
  g: number,
  b: number,
  a: number,
): number {
  return context.symbols.SDL_MapRGBA(
    (format as DataPointer<PixelFormat>)._pointer,
    r,
    g,
    b,
    a,
  ) as number;
}

export function MaximizeWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_MaximizeWindow(
    (window as DataPointer<Window>)._pointer,
  );
}

export function MinimizeWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_MinimizeWindow(
    (window as DataPointer<Window>)._pointer,
  );
}

export function PollEvent(
  event: Pointer<Event>,
): number {
  return context.symbols.SDL_PollEvent(
    (event as DataPointer<Event>)._pointer,
  ) as number;
}

export function Quit(): void {
  context.symbols.SDL_Quit();
  context.library.close();
}

export function RenderClear(
  renderer: Pointer<Renderer>,
): number {
  return context.symbols.SDL_RenderClear(
    (renderer as DataPointer<Renderer>)._pointer,
  ) as number;
}

export function RenderFillRect(
  renderer: Pointer<Renderer>,
  rect: Pointer<Rect>,
): number {
  return context.symbols.SDL_RenderFillRect(
    (renderer as DataPointer<Renderer>)._pointer,
    (rect as DataPointer<Rect>)._pointer,
  ) as number;
}

export function RenderFlush(
  renderer: Pointer<Renderer>,
): number {
  return context.symbols.SDL_RenderFlush(
    (renderer as DataPointer<Renderer>)._pointer,
  ) as number;
}

export function RenderPresent(
  renderer: Pointer<Renderer>,
): void {
  context.symbols.SDL_RenderPresent(
    (renderer as DataPointer<Renderer>)._pointer,
  );
}

export function RestoreWindow(
  window: Pointer<Window>,
): void {
  context.symbols.SDL_RestoreWindow(
    (window as DataPointer<Window>)._pointer,
  );
}

export function RWFromFile(
  file: string,
  mode: RWMode,
): Pointer<RWops> {
  return new DataPointer<RWops>(
    context.symbols.SDL_RWFromFile(
      toCString(file),
      toCString(mode),
    ) as Deno.UnsafePointer,
    RWops,
  );
}

export function SetRenderDrawColor(
  renderer: Pointer<Renderer>,
  r: number,
  g: number,
  b: number,
  a: number,
): number {
  return context.symbols.SDL_SetRenderDrawColor(
    (renderer as DataPointer<Renderer>)._pointer,
    r,
    g,
    b,
    a,
  ) as number;
}

export function UnlockSurface(
  surface: Pointer<Surface>,
): void {
  context.symbols.SDL_UnlockSurface(
    (surface as DataPointer<Surface>)._pointer,
  );
}

export function UpdateWindowSurface(
  window: Pointer<Window>,
): number {
  return context.symbols.SDL_UpdateWindowSurface(
    (window as DataPointer<Window>)._pointer,
  ) as number;
}