import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeRight from "@unction/mergeright";
import fresh from "@unction/fresh";
import attach from "@unction/attach";
import type from "@unction/type";
import isType from "@unction/istype";
import {join} from "most";

export default function flatten<A> (enumerable: EnumerableType<Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string | A>): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
  if (isType("Stream")(enumerable)) {
    return join(enumerable);
  }

  return reduceWithValueKey((accumulated: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) => (value: A) => (key: unknown) => {
    if (isType(type(enumerable))(value)) {
      return mergeRight(accumulated)(value);
    }

    return attach(key)(value)(accumulated);
  })(fresh(enumerable))(enumerable);
}
