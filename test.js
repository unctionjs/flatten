/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import xstream from "xstream"
import streamSatisfies from "@unction/streamsatisfies"

import flatten from "./index"

test("Array, two dimensons", ({same, end}) => {
  same(
    flatten([["a", "b"], ["c", "d"]]),
    ["a", "b", "c", "d"]
  )

  end()
})

test("Array, mixed dimensons", ({same, end}) => {
  same(
    flatten(["a", "b", ["c", "d"]]),
    ["a", "b", "c", "d"]
  )

  end()
})

test("Stream", ({equal, doesNotThrow, end}) => {
  streamSatisfies([
    "a",
    "b",
    "c",
    "d",
  ])(
    (given) => (expected) => equal(given, expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      equal(length, size)

      end()
    }
  )(
    flatten(
      xstream.from([
        xstream.from(["a", "b"]),
        xstream.from(["c", "d"]),
      ])
    )
  )
})
