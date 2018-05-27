import reduceWithValueKey from "@unction/reducewithvaluekey";
import mergeRight from "@unction/mergeright";
import fresh from "@unction/fresh";
import attach from "@unction/attach";
import type from "@unction/type";
import isType from "@unction/istype";
import { join } from "most";
export default function flatten(functor) {
  if (isType("Stream")(functor)) {
    return join(functor);
  }

  return reduceWithValueKey(accumulated => value => key => {
    if (isType(type(functor))(value)) {
      return mergeRight(accumulated)(value);
    }

    return attach(key)(value)(accumulated);
  })(fresh(functor))(functor);
}
