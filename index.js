import reduceWithValueKey from "@unction/reducewithvaluekey"
import mergeRight from "@unction/mergeright"
import fresh from "@unction/fresh"
import attach from "@unction/attach"
import type from "@unction/type"
import isType from "@unction/istype"

import type {FunctorType} from "types"
import type {UnaryFunctionType} from "types"
import type {KeyType} from "types"

export default function flatten (functor: FunctorType): FunctorType {
  if (functor.flatten instanceof Function) {
    return functor.flatten()
  }

  return reduceWithValueKey(
    (accumulated: FunctorType): UnaryFunctionType =>
      (value: mixed): UnaryFunctionType =>
        (key: KeyType): FunctorType => {
          if (isType(type(functor))(value)) {
            return mergeRight(accumulated)(value)
          }

          return attach(key)(value)(accumulated)
        }
  )(
    fresh(functor)
  )(
    functor
  )
}
