export type NativeType =
  | "f32"
  | "f64"
  | "i8"
  | "i16"
  | "i32"
  | "i64"
  | "pointer"
  | "struct"
  | "u8"
  | "u16"
  | "u32"
  | "u64"
  | "void";

export type CodeGenEnums = Record<string, CodeGenEnum>;

export interface CodeGenEnum {
  values: Record<string, string>;
}

export type CodeGenEvents = Record<string, CodeGenEventType>;

export interface CodeGenEventType extends CodeGenStruct {
  // The name struct has in the event union in cases
  // where the name can simply not be infered (i.e. KeyboardEvent).
  unionName?: string;
}

export type CodeGenFunctions = Record<string, CodeGenFunction>;

export type CodeGenFunctionImplementations = Record<string, string>;

export interface CodeGenFunction {
  // Some functions are (i.e. SDL_BlitSurface) are just
  // macros that proxy to another name.
  symbolName?: string;

  parameters: Record<string, CodeGenFunctionParam>;

  result: {
    nativeType: string;
    type: NativeType;

    // If set this type will be used as the script type.
    overrideType?: string;
  };
}

export interface CodeGenFunctionParam {
  // SDL type.
  nativeType: string;

  // FFI type.
  type: NativeType;

  // Can the parameter be null.
  nullable?: boolean;

  // If set this type will be used as the script type.
  overrideType?: string;
}

export type CodeGenStructs = Record<string, CodeGenStruct>;

export type CodeGenOpaqueStructs = string[];

export interface CodeGenStruct {
  // Indicates whether the struct can be allocated in
  // in script. If false it will only be allocated by SDL.
  allocatable?: boolean;

  // Indicates whether the struct can be written to in
  // in script. If false it will only be written to by SDL.
  writable?: boolean;

  // Size of the struct in bytes.
  size: number;

  // Struct members.
  members: Record<string, CodeGenStructMember>;
}

export interface CodeGenStructMember {
  // SDL type.
  nativeType: string;

  // FFI type.
  type: NativeType;

  // Offset of the member in bytes.
  offset: number;
}