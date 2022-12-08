import { SRC_PATH } from "@shared/constants.ts";
import * as path from "@shared/path.ts";
import { writeEnums, writeFunctions, writeStructs, writeSymbols } from "./generators.ts";
import { enums } from "./SDL_image/enums.ts";
import { functionImplementations, functions } from "./SDL_image/functions.ts";
import { opaqueStructs, structs } from "./SDL_image/structs.ts";
import { structs as SDL_structs } from "./SDL/structs.ts";

const SDL_IMAGE_SRC_PATH = path.join(SRC_PATH, "SDL_image");

export async function codegenSDL_image(): Promise<void> {
  await writeEnums(`${SDL_IMAGE_SRC_PATH}/enums.ts`, enums, []);
  // await writeStructs(`${SDL_IMAGE_SRC_PATH}/structs.ts`, structs, opaqueStructs);
  await writeSymbols(`${SDL_IMAGE_SRC_PATH}/_symbols.ts`, functions, enums, structs, opaqueStructs);
  await writeFunctions(
    `${SDL_IMAGE_SRC_PATH}/functions.ts`,
    functions,
    functionImplementations,
    enums,
    {
      SDL_Surface: {
        ...SDL_structs["SDL_Surface"],
        doNotImport: true,
      },
      SDL_version: {
        ...SDL_structs["SDL_version"],
        doNotImport: true,
      },
      ...structs,
    },
    opaqueStructs,
    [
      `import { Surface, version } from "../SDL/structs.ts";`,
    ],
  );
}
