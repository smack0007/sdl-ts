import { AllocatableStruct, AllocatableStructConstructor, BoxableValue, BoxableValueConstructor } from "./types.ts";
import { NumberStruct } from "./_structs.ts";
import { sizeof } from "./_utils.ts";

export function getBoxableValueConsturctor(
  _constructor: BoxableValueConstructor,
): AllocatableStructConstructor<AllocatableStruct> {
  if (_constructor === Number) {
    _constructor = NumberStruct;
  }

  return _constructor as AllocatableStructConstructor<AllocatableStruct>;
}

export class BoxedValue<T extends BoxableValue> {
  public readonly _data: Uint8Array;
  private readonly _value: T;

  private constructor(_constructor: BoxableValueConstructor) {
    _constructor = getBoxableValueConsturctor(_constructor);

    const dataLength = sizeof(_constructor);

    this._data = new Uint8Array(dataLength);
    this._value = new _constructor(this._data) as T;
  }

  public static create<T>(_constructor: BoxableValueConstructor): BoxedValue<T> {
    return new BoxedValue(_constructor);
  }

  public get value(): T {
    if (this._value instanceof NumberStruct) {
      return this._value.value as T;
    }

    return this._value;
  }
}

export function isBoxedValue(value: unknown): value is BoxedValue<BoxableValue> {
  return (value instanceof BoxedValue);
}

export class BoxedArray<T extends BoxableValue> {
  private constructor(
    public readonly _data: Uint8Array,
    public readonly array: T[],
    public readonly sizeOfElementInBytes: number,
  ) {
  }

  public static create<T extends BoxableValue>(
    _constructor: BoxableValueConstructor,
    length: number,
  ): BoxedArray<T> {
    if (length <= 0) {
      throw new Error("length must be > 0.");
    }

    _constructor = getBoxableValueConsturctor(_constructor);

    const sizeInBytes = sizeof(_constructor);

    const array = new Array<T>(length);
    const data = new Uint8Array(sizeInBytes * length);

    for (let i = 0; i < length; i++) {
      const dataOffset = new Uint8Array(data.buffer, sizeInBytes * i, sizeInBytes);
      array[i] = new _constructor(dataOffset) as T;
    }

    return new BoxedArray<T>(
      data,
      array,
      sizeof(_constructor),
    );
  }

  public at(index: number): T {
    return this.array[index];
  }
}

export function isBoxedArray(value: unknown): value is BoxedArray<AllocatableStruct> {
  return value instanceof BoxedArray;
}
