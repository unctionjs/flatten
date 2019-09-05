import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeRight from "@unction/mergeright";
import fresh from "@unction/fresh";
import attach from "@unction/attach";
import type from "@unction/type";
import isType from "@unction/istype";
import {join} from "most";

import {EnumerableType} from "./types";

export default function flatten<A> (enumerable: EnumerableType<EnumerableType<A> | A>): EnumerableType<A> {
  if (isType("Stream")(enumerable)) {
    return join(enumerable);
  }

  return reduceWithValueKey((accumulated: EnumerableType<A>) => (value: A) => (key: unknown) => {
    if (isType(type(enumerable))(value)) {
      return mergeRight(accumulated)(value);
    }

    return attach(key)(value)(accumulated);
  })(fresh(enumerable))(enumerable);
}
