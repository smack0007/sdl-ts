// This file is auto generated. To update the file make changes to the code generator.

// deno-lint-ignore-file no-unused-vars

import { Enum, Flags } from "../types.ts";

export const ArrayOrder = {
  NONE: 0,
  RGB: 1,
  RGBA: 2,
  ARGB: 3,
  BGR: 4,
  BGRA: 5,
  ABGR: 6,
} as const;

export type ArrayOrder = Enum<typeof ArrayOrder>;

export const BitmapOrder = {
  NONE: 0,
  _4321: 1,
  _1234: 2,
} as const;

export type BitmapOrder = Enum<typeof BitmapOrder>;

export const BlendFactor = {
  ZERO: 1,
  ONE: 2,
  SRC_COLOR: 3,
  ONE_MINUS_SRC_COLOR: 4,
  SRC_ALPHA: 5,
  ONE_MINUS_SRC_ALPHA: 6,
  DST_COLOR: 7,
  ONE_MINUS_DST_COLOR: 8,
  DST_ALPHA: 9,
  ONE_MINUS_DST_ALPHA: 10,
} as const;

export type BlendFactor = Enum<typeof BlendFactor>;

export const BlendMode = {
  NONE: 0,
  BLEND: 1,
  ADD: 2,
  MOD: 4,
  MUL: 8,
  INVALID: 2147483647,
} as const;

export type BlendMode = Enum<typeof BlendMode>;

export const BlendOperation = {
  ADD: 1,
  SUBTRACT: 2,
  REV_SUBTRACT: 3,
  MINIMUM: 4,
  MAXIMUM: 5,
} as const;

export type BlendOperation = Enum<typeof BlendOperation>;

export const EventType = {
  FIRSTEVENT: 0,
  QUIT: 256,
  APP_TERMINATING: 257,
  APP_LOWMEMORY: 258,
  APP_WILLENTERBACKGROUND: 259,
  APP_DIDENTERBACKGROUND: 260,
  APP_WILLENTERFOREGROUND: 261,
  APP_DIDENTERFOREGROUND: 262,
  LOCALECHANGED: 263,
  DISPLAYEVENT: 336,
  WINDOWEVENT: 512,
  SYSWMEVENT: 513,
  KEYDOWN: 768,
  KEYUP: 769,
  TEXTEDITING: 770,
  TEXTINPUT: 771,
  KEYMAPCHANGED: 772,
  MOUSEMOTION: 1024,
  MOUSEBUTTONDOWN: 1025,
  MOUSEBUTTONUP: 1026,
  MOUSEWHEEL: 1027,
  JOYAXISMOTION: 1536,
  JOYBALLMOTION: 1537,
  JOYHATMOTION: 1538,
  JOYBUTTONDOWN: 1539,
  JOYBUTTONUP: 1540,
  JOYDEVICEADDED: 1541,
  JOYDEVICEREMOVED: 1542,
  CONTROLLERAXISMOTION: 1616,
  CONTROLLERBUTTONDOWN: 1617,
  CONTROLLERBUTTONUP: 1618,
  CONTROLLERDEVICEADDED: 1619,
  CONTROLLERDEVICEREMOVED: 1620,
  CONTROLLERDEVICEREMAPPED: 1621,
  CONTROLLERTOUCHPADDOWN: 1622,
  CONTROLLERTOUCHPADMOTION: 1623,
  CONTROLLERTOUCHPADUP: 1624,
  CONTROLLERSENSORUPDATE: 1625,
  FINGERDOWN: 1792,
  FINGERUP: 1793,
  FINGERMOTION: 1794,
  DOLLARGESTURE: 2048,
  DOLLARRECORD: 2049,
  MULTIGESTURE: 2050,
  CLIPBOARDUPDATE: 2304,
  DROPFILE: 4096,
  DROPTEXT: 4097,
  DROPBEGIN: 4098,
  DROPCOMPLETE: 4099,
  AUDIODEVICEADDED: 4352,
  AUDIODEVICEREMOVED: 4353,
  SENSORUPDATE: 4608,
  RENDER_TARGETS_RESET: 8192,
  RENDER_DEVICE_RESET: 8193,
  POLLSENTINEL: 32512,
  USEREVENT: 32768,
  LASTEVENT: 65535,
} as const;

export type EventType = Enum<typeof EventType>;

export const FlashOperation = {
  FLASH_CANCEL: 0,
  FLASH_BRIEFLY: 1,
  FLASH_UNTIL_FOCUSED: 2,
} as const;

export type FlashOperation = Enum<typeof FlashOperation>;

export const InitFlags = {
  TIMER: 1,
  AUDIO: 16,
  VIDEO: 32,
  JOYSTICK: 512,
  HAPTIC: 4096,
  GAMECONTROLLER: 8192,
  EVENTS: 16384,
  SENSOR: 32768,
  NOPARACHUTE: 1048576,
  EVERYTHING: 62001,
} as const;

export type InitFlags = Flags<typeof InitFlags, "InitFlags">;

export const Keycode = {
  SDLK_UNKNOWN: 0,
  SDLK_RETURN: 13,
  SDLK_ESCAPE: 27,
  SDLK_BACKSPACE: 8,
  SDLK_TAB: 9,
  SDLK_SPACE: 32,
  SDLK_EXCLAIM: 33,
  SDLK_QUOTEDBL: 34,
  SDLK_HASH: 35,
  SDLK_PERCENT: 37,
  SDLK_DOLLAR: 36,
  SDLK_AMPERSAND: 38,
  SDLK_QUOTE: 39,
  SDLK_LEFTPAREN: 40,
  SDLK_RIGHTPAREN: 41,
  SDLK_ASTERISK: 42,
  SDLK_PLUS: 43,
  SDLK_COMMA: 44,
  SDLK_MINUS: 45,
  SDLK_PERIOD: 46,
  SDLK_SLASH: 47,
  SDLK_0: 48,
  SDLK_1: 49,
  SDLK_2: 50,
  SDLK_3: 51,
  SDLK_4: 52,
  SDLK_5: 53,
  SDLK_6: 54,
  SDLK_7: 55,
  SDLK_8: 56,
  SDLK_9: 57,
  SDLK_COLON: 58,
  SDLK_SEMICOLON: 59,
  SDLK_LESS: 60,
  SDLK_EQUALS: 61,
  SDLK_GREATER: 62,
  SDLK_QUESTION: 63,
  SDLK_AT: 64,
  SDLK_LEFTBRACKET: 91,
  SDLK_BACKSLASH: 92,
  SDLK_RIGHTBRACKET: 93,
  SDLK_CARET: 94,
  SDLK_UNDERSCORE: 95,
  SDLK_BACKQUOTE: 96,
  SDLK_a: 97,
  SDLK_b: 98,
  SDLK_c: 99,
  SDLK_d: 100,
  SDLK_e: 101,
  SDLK_f: 102,
  SDLK_g: 103,
  SDLK_h: 104,
  SDLK_i: 105,
  SDLK_j: 106,
  SDLK_k: 107,
  SDLK_l: 108,
  SDLK_m: 109,
  SDLK_n: 110,
  SDLK_o: 111,
  SDLK_p: 112,
  SDLK_q: 113,
  SDLK_r: 114,
  SDLK_s: 115,
  SDLK_t: 116,
  SDLK_u: 117,
  SDLK_v: 118,
  SDLK_w: 119,
  SDLK_x: 120,
  SDLK_y: 121,
  SDLK_z: 122,
  SDLK_CAPSLOCK: 1073741881,
  SDLK_F1: 1073741882,
  SDLK_F2: 1073741883,
  SDLK_F3: 1073741884,
  SDLK_F4: 1073741885,
  SDLK_F5: 1073741886,
  SDLK_F6: 1073741887,
  SDLK_F7: 1073741888,
  SDLK_F8: 1073741889,
  SDLK_F9: 1073741890,
  SDLK_F10: 1073741891,
  SDLK_F11: 1073741892,
  SDLK_F12: 1073741893,
  SDLK_PRINTSCREEN: 1073741894,
  SDLK_SCROLLLOCK: 1073741895,
  SDLK_PAUSE: 1073741896,
  SDLK_INSERT: 1073741897,
  SDLK_HOME: 1073741898,
  SDLK_PAGEUP: 1073741899,
  SDLK_DELETE: 127,
  SDLK_END: 1073741901,
  SDLK_PAGEDOWN: 1073741902,
  SDLK_RIGHT: 1073741903,
  SDLK_LEFT: 1073741904,
  SDLK_DOWN: 1073741905,
  SDLK_UP: 1073741906,
  SDLK_NUMLOCKCLEAR: 1073741907,
  SDLK_KP_DIVIDE: 1073741908,
  SDLK_KP_MULTIPLY: 1073741909,
  SDLK_KP_MINUS: 1073741910,
  SDLK_KP_PLUS: 1073741911,
  SDLK_KP_ENTER: 1073741912,
  SDLK_KP_1: 1073741913,
  SDLK_KP_2: 1073741914,
  SDLK_KP_3: 1073741915,
  SDLK_KP_4: 1073741916,
  SDLK_KP_5: 1073741917,
  SDLK_KP_6: 1073741918,
  SDLK_KP_7: 1073741919,
  SDLK_KP_8: 1073741920,
  SDLK_KP_9: 1073741921,
  SDLK_KP_0: 1073741922,
  SDLK_KP_PERIOD: 1073741923,
  SDLK_APPLICATION: 1073741925,
  SDLK_POWER: 1073741926,
  SDLK_KP_EQUALS: 1073741927,
  SDLK_F13: 1073741928,
  SDLK_F14: 1073741929,
  SDLK_F15: 1073741930,
  SDLK_F16: 1073741931,
  SDLK_F17: 1073741932,
  SDLK_F18: 1073741933,
  SDLK_F19: 1073741934,
  SDLK_F20: 1073741935,
  SDLK_F21: 1073741936,
  SDLK_F22: 1073741937,
  SDLK_F23: 1073741938,
  SDLK_F24: 1073741939,
  SDLK_EXECUTE: 1073741940,
  SDLK_HELP: 1073741941,
  SDLK_MENU: 1073741942,
  SDLK_SELECT: 1073741943,
  SDLK_STOP: 1073741944,
  SDLK_AGAIN: 1073741945,
  SDLK_UNDO: 1073741946,
  SDLK_CUT: 1073741947,
  SDLK_COPY: 1073741948,
  SDLK_PASTE: 1073741949,
  SDLK_FIND: 1073741950,
  SDLK_MUTE: 1073741951,
  SDLK_VOLUMEUP: 1073741952,
  SDLK_VOLUMEDOWN: 1073741953,
  SDLK_KP_COMMA: 1073741957,
  SDLK_KP_EQUALSAS400: 1073741958,
  SDLK_ALTERASE: 1073741977,
  SDLK_SYSREQ: 1073741978,
  SDLK_CANCEL: 1073741979,
  SDLK_CLEAR: 1073741980,
  SDLK_PRIOR: 1073741981,
  SDLK_RETURN2: 1073741982,
  SDLK_SEPARATOR: 1073741983,
  SDLK_OUT: 1073741984,
  SDLK_OPER: 1073741985,
  SDLK_CLEARAGAIN: 1073741986,
  SDLK_CRSEL: 1073741987,
  SDLK_EXSEL: 1073741988,
  SDLK_KP_00: 1073742000,
  SDLK_KP_000: 1073742001,
  SDLK_THOUSANDSSEPARATOR: 1073742002,
  SDLK_DECIMALSEPARATOR: 1073742003,
  SDLK_CURRENCYUNIT: 1073742004,
  SDLK_CURRENCYSUBUNIT: 1073742005,
  SDLK_KP_LEFTPAREN: 1073742006,
  SDLK_KP_RIGHTPAREN: 1073742007,
  SDLK_KP_LEFTBRACE: 1073742008,
  SDLK_KP_RIGHTBRACE: 1073742009,
  SDLK_KP_TAB: 1073742010,
  SDLK_KP_BACKSPACE: 1073742011,
  SDLK_KP_A: 1073742012,
  SDLK_KP_B: 1073742013,
  SDLK_KP_C: 1073742014,
  SDLK_KP_D: 1073742015,
  SDLK_KP_E: 1073742016,
  SDLK_KP_F: 1073742017,
  SDLK_KP_XOR: 1073742018,
  SDLK_KP_POWER: 1073742019,
  SDLK_KP_PERCENT: 1073742020,
  SDLK_KP_LESS: 1073742021,
  SDLK_KP_GREATER: 1073742022,
  SDLK_KP_AMPERSAND: 1073742023,
  SDLK_KP_DBLAMPERSAND: 1073742024,
  SDLK_KP_VERTICALBAR: 1073742025,
  SDLK_KP_DBLVERTICALBAR: 1073742026,
  SDLK_KP_COLON: 1073742027,
  SDLK_KP_HASH: 1073742028,
  SDLK_KP_SPACE: 1073742029,
  SDLK_KP_AT: 1073742030,
  SDLK_KP_EXCLAM: 1073742031,
  SDLK_KP_MEMSTORE: 1073742032,
  SDLK_KP_MEMRECALL: 1073742033,
  SDLK_KP_MEMCLEAR: 1073742034,
  SDLK_KP_MEMADD: 1073742035,
  SDLK_KP_MEMSUBTRACT: 1073742036,
  SDLK_KP_MEMMULTIPLY: 1073742037,
  SDLK_KP_MEMDIVIDE: 1073742038,
  SDLK_KP_PLUSMINUS: 1073742039,
  SDLK_KP_CLEAR: 1073742040,
  SDLK_KP_CLEARENTRY: 1073742041,
  SDLK_KP_BINARY: 1073742042,
  SDLK_KP_OCTAL: 1073742043,
  SDLK_KP_DECIMAL: 1073742044,
  SDLK_KP_HEXADECIMAL: 1073742045,
  SDLK_LCTRL: 1073742048,
  SDLK_LSHIFT: 1073742049,
  SDLK_LALT: 1073742050,
  SDLK_LGUI: 1073742051,
  SDLK_RCTRL: 1073742052,
  SDLK_RSHIFT: 1073742053,
  SDLK_RALT: 1073742054,
  SDLK_RGUI: 1073742055,
  SDLK_MODE: 1073742081,
  SDLK_AUDIONEXT: 1073742082,
  SDLK_AUDIOPREV: 1073742083,
  SDLK_AUDIOSTOP: 1073742084,
  SDLK_AUDIOPLAY: 1073742085,
  SDLK_AUDIOMUTE: 1073742086,
  SDLK_MEDIASELECT: 1073742087,
  SDLK_WWW: 1073742088,
  SDLK_MAIL: 1073742089,
  SDLK_CALCULATOR: 1073742090,
  SDLK_COMPUTER: 1073742091,
  SDLK_AC_SEARCH: 1073742092,
  SDLK_AC_HOME: 1073742093,
  SDLK_AC_BACK: 1073742094,
  SDLK_AC_FORWARD: 1073742095,
  SDLK_AC_STOP: 1073742096,
  SDLK_AC_REFRESH: 1073742097,
  SDLK_AC_BOOKMARKS: 1073742098,
  SDLK_BRIGHTNESSDOWN: 1073742099,
  SDLK_BRIGHTNESSUP: 1073742100,
  SDLK_DISPLAYSWITCH: 1073742101,
  SDLK_KBDILLUMTOGGLE: 1073742102,
  SDLK_KBDILLUMDOWN: 1073742103,
  SDLK_KBDILLUMUP: 1073742104,
  SDLK_EJECT: 1073742105,
  SDLK_SLEEP: 1073742106,
  SDLK_APP1: 1073742107,
  SDLK_APP2: 1073742108,
  SDLK_AUDIOREWIND: 1073742109,
  SDLK_AUDIOFASTFORWARD: 1073742110,
  SDLK_SOFTLEFT: 1073742111,
  SDLK_SOFTRIGHT: 1073742112,
  SDLK_CALL: 1073742113,
  SDLK_ENDCALL: 1073742114,
} as const;

export type Keycode = Enum<typeof Keycode>;

export const PackedLayout = {
  NONE: 0,
  _332: 1,
  _4444: 2,
  _1555: 3,
  _5551: 4,
  _565: 5,
  _8888: 6,
  _2101010: 7,
  _1010102: 8,
} as const;

export type PackedLayout = Enum<typeof PackedLayout>;

export const PackedOrder = {
  NONE: 0,
  XRGB: 1,
  RGBX: 2,
  ARGB: 3,
  RGBA: 4,
  XBGR: 5,
  BGRX: 6,
  ABGR: 7,
  BGRA: 8,
} as const;

export type PackedOrder = Enum<typeof PackedOrder>;

export const PixelType = {
  UNKNOWN: 0,
  INDEX1: 1,
  INDEX4: 2,
  INDEX8: 3,
  PACKED8: 4,
  PACKED16: 5,
  PACKED32: 6,
  ARRAYU8: 7,
  ARRAYU16: 8,
  ARRAYU32: 9,
  ARRAYF16: 10,
  ARRAYF32: 11,
} as const;

export type PixelType = Enum<typeof PixelType>;

export const RendererFlags = {
  SOFTWARE: 1,
  ACCELERATED: 2,
  PRESENTVSYNC: 4,
  TARGETTEXTURE: 8,
} as const;

export type RendererFlags = Flags<typeof RendererFlags, "RendererFlags">;

export const RendererFlip = {
  NONE: 0,
  HORIZONTAL: 1,
  VERTICAL: 2,
} as const;

export type RendererFlip = Enum<typeof RendererFlip>;

export const ScaleMode = {
  Nearest: 0,
  Linear: 1,
  Best: 2,
} as const;

export type ScaleMode = Enum<typeof ScaleMode>;

export const Scancode = {
  UNKNOWN: 0,
  A: 4,
  B: 5,
  C: 6,
  D: 7,
  E: 8,
  F: 9,
  G: 10,
  H: 11,
  I: 12,
  J: 13,
  K: 14,
  L: 15,
  M: 16,
  N: 17,
  O: 18,
  P: 19,
  Q: 20,
  R: 21,
  S: 22,
  T: 23,
  U: 24,
  V: 25,
  W: 26,
  X: 27,
  Y: 28,
  Z: 29,
  _1: 30,
  _2: 31,
  _3: 32,
  _4: 33,
  _5: 34,
  _6: 35,
  _7: 36,
  _8: 37,
  _9: 38,
  _0: 39,
  RETURN: 40,
  ESCAPE: 41,
  BACKSPACE: 42,
  TAB: 43,
  SPACE: 44,
  MINUS: 45,
  EQUALS: 46,
  LEFTBRACKET: 47,
  RIGHTBRACKET: 48,
  BACKSLASH: 49,
  NONUSHASH: 50,
  SEMICOLON: 51,
  APOSTROPHE: 52,
  GRAVE: 53,
  COMMA: 54,
  PERIOD: 55,
  SLASH: 56,
  CAPSLOCK: 57,
  F1: 58,
  F2: 59,
  F3: 60,
  F4: 61,
  F5: 62,
  F6: 63,
  F7: 64,
  F8: 65,
  F9: 66,
  F10: 67,
  F11: 68,
  F12: 69,
  PRINTSCREEN: 70,
  SCROLLLOCK: 71,
  PAUSE: 72,
  INSERT: 73,
  HOME: 74,
  PAGEUP: 75,
  DELETE: 76,
  END: 77,
  PAGEDOWN: 78,
  RIGHT: 79,
  LEFT: 80,
  DOWN: 81,
  UP: 82,
  NUMLOCKCLEAR: 83,
  KP_DIVIDE: 84,
  KP_MULTIPLY: 85,
  KP_MINUS: 86,
  KP_PLUS: 87,
  KP_ENTER: 88,
  KP_1: 89,
  KP_2: 90,
  KP_3: 91,
  KP_4: 92,
  KP_5: 93,
  KP_6: 94,
  KP_7: 95,
  KP_8: 96,
  KP_9: 97,
  KP_0: 98,
  KP_PERIOD: 99,
  NONUSBACKSLASH: 100,
  APPLICATION: 101,
  POWER: 102,
  KP_EQUALS: 103,
  F13: 104,
  F14: 105,
  F15: 106,
  F16: 107,
  F17: 108,
  F18: 109,
  F19: 110,
  F20: 111,
  F21: 112,
  F22: 113,
  F23: 114,
  F24: 115,
  EXECUTE: 116,
  HELP: 117,
  MENU: 118,
  SELECT: 119,
  STOP: 120,
  AGAIN: 121,
  UNDO: 122,
  CUT: 123,
  COPY: 124,
  PASTE: 125,
  FIND: 126,
  MUTE: 127,
  VOLUMEUP: 128,
  VOLUMEDOWN: 129,
  KP_COMMA: 133,
  KP_EQUALSAS400: 134,
  INTERNATIONAL1: 135,
  INTERNATIONAL2: 136,
  INTERNATIONAL3: 137,
  INTERNATIONAL4: 138,
  INTERNATIONAL5: 139,
  INTERNATIONAL6: 140,
  INTERNATIONAL7: 141,
  INTERNATIONAL8: 142,
  INTERNATIONAL9: 143,
  LANG1: 144,
  LANG2: 145,
  LANG3: 146,
  LANG4: 147,
  LANG5: 148,
  LANG6: 149,
  LANG7: 150,
  LANG8: 151,
  LANG9: 152,
  ALTERASE: 153,
  SYSREQ: 154,
  CANCEL: 155,
  CLEAR: 156,
  PRIOR: 157,
  RETURN2: 158,
  SEPARATOR: 159,
  OUT: 160,
  OPER: 161,
  CLEARAGAIN: 162,
  CRSEL: 163,
  EXSEL: 164,
  KP_00: 176,
  KP_000: 177,
  THOUSANDSSEPARATOR: 178,
  DECIMALSEPARATOR: 179,
  CURRENCYUNIT: 180,
  CURRENCYSUBUNIT: 181,
  KP_LEFTPAREN: 182,
  KP_RIGHTPAREN: 183,
  KP_LEFTBRACE: 184,
  KP_RIGHTBRACE: 185,
  KP_TAB: 186,
  KP_BACKSPACE: 187,
  KP_A: 188,
  KP_B: 189,
  KP_C: 190,
  KP_D: 191,
  KP_E: 192,
  KP_F: 193,
  KP_XOR: 194,
  KP_POWER: 195,
  KP_PERCENT: 196,
  KP_LESS: 197,
  KP_GREATER: 198,
  KP_AMPERSAND: 199,
  KP_DBLAMPERSAND: 200,
  KP_VERTICALBAR: 201,
  KP_DBLVERTICALBAR: 202,
  KP_COLON: 203,
  KP_HASH: 204,
  KP_SPACE: 205,
  KP_AT: 206,
  KP_EXCLAM: 207,
  KP_MEMSTORE: 208,
  KP_MEMRECALL: 209,
  KP_MEMCLEAR: 210,
  KP_MEMADD: 211,
  KP_MEMSUBTRACT: 212,
  KP_MEMMULTIPLY: 213,
  KP_MEMDIVIDE: 214,
  KP_PLUSMINUS: 215,
  KP_CLEAR: 216,
  KP_CLEARENTRY: 217,
  KP_BINARY: 218,
  KP_OCTAL: 219,
  KP_DECIMAL: 220,
  KP_HEXADECIMAL: 221,
  LCTRL: 224,
  LSHIFT: 225,
  LALT: 226,
  LGUI: 227,
  RCTRL: 228,
  RSHIFT: 229,
  RALT: 230,
  RGUI: 231,
  MODE: 257,
  AUDIONEXT: 258,
  AUDIOPREV: 259,
  AUDIOSTOP: 260,
  AUDIOPLAY: 261,
  AUDIOMUTE: 262,
  MEDIASELECT: 263,
  WWW: 264,
  MAIL: 265,
  CALCULATOR: 266,
  COMPUTER: 267,
  AC_SEARCH: 268,
  AC_HOME: 269,
  AC_BACK: 270,
  AC_FORWARD: 271,
  AC_STOP: 272,
  AC_REFRESH: 273,
  AC_BOOKMARKS: 274,
  BRIGHTNESSDOWN: 275,
  BRIGHTNESSUP: 276,
  DISPLAYSWITCH: 277,
  KBDILLUMTOGGLE: 278,
  KBDILLUMDOWN: 279,
  KBDILLUMUP: 280,
  EJECT: 281,
  SLEEP: 282,
  APP1: 283,
  APP2: 284,
  AUDIOREWIND: 285,
  AUDIOFASTFORWARD: 286,
  NUM_SCANCODES: 512,
} as const;

export type Scancode = Enum<typeof Scancode>;

export const TextureAccess = {
  STATIC: 0,
  STREAMING: 1,
  TARGET: 2,
} as const;

export type TextureAccess = Enum<typeof TextureAccess>;

export const TextureModulate = {
  NONE: 0,
  COLOR: 1,
  ALPHA: 2,
} as const;

export type TextureModulate = Enum<typeof TextureModulate>;

export const WindowEventID = {
  NONE: 0,
  SHOWN: 1,
  HIDDEN: 2,
  EXPOSED: 3,
  MOVED: 4,
  RESIZED: 5,
  SIZE_CHANGED: 6,
  MINIMIZED: 7,
  MAXIMIZED: 8,
  RESTORED: 9,
  ENTER: 10,
  LEAVE: 11,
  FOCUS_GAINED: 12,
  FOCUS_LOST: 13,
  CLOSE: 14,
  TAKE_FOCUS: 15,
  HIT_TEST: 16,
  ICCPROF_CHANGED: 17,
  DISPLAY_CHANGED: 18,
} as const;

export type WindowEventID = Enum<typeof WindowEventID>;

export const WindowFlags = {
  FULLSCREEN: 1,
  OPENGL: 2,
  SHOWN: 4,
  HIDDEN: 8,
  BORDERLESS: 16,
  RESIZABLE: 32,
  MINIMIZED: 64,
  MAXIMIZED: 128,
  MOUSE_GRABBED: 256,
  INPUT_FOCUS: 512,
  MOUSE_FOCUS: 1024,
  FULLSCREEN_DESKTOP: 4097,
  FOREIGN: 2048,
  ALLOW_HIGHDPI: 8192,
  MOUSE_CAPTURE: 16384,
  ALWAYS_ON_TOP: 32768,
  SKIP_TASKBAR: 65536,
  UTILITY: 131072,
  TOOLTIP: 262144,
  POPUP_MENU: 524288,
  KEYBOARD_GRABBED: 1048576,
  VULKAN: 268435456,
  METAL: 536870912,
  INPUT_GRABBED: 256,
} as const;

export type WindowFlags = Flags<typeof WindowFlags, "WindowFlags">;

export const WindowPos = {
  UNDEFINED: 536805376,
  CENTERED: 805240832,
} as const;

export type WindowPos = Enum<typeof WindowPos>;
