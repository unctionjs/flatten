
import {from} from "most";
import streamSatisfies from "@unction/streamsatisfies";

import flatten from "./index";

test("Array, two dimensons", () => {
  expect(flatten([["a", "b"], ["c", "d"]])).toEqual(["a", "b", "c", "d"]);
});

test("Array, mixed dimensons", () => {
  expect(flatten(["a", "b", ["c", "d"]])).toEqual(["a", "b", "c", "d"]);
});

test("Stream", done => {
  streamSatisfies([
    "a",
    "b",
    "c",
    "d",
  ])(
    (given) => (expected) => expect(given).toBe(expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      expect(length).toBe(size);

      done();
    }
  )(
    flatten(
      from([
        from(["a", "b"]),
        from(["c", "d"]),
      ])
    )
  );
});
