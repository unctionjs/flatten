# @unction/flatten

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> EnumerableType<EnumerableType<A> | A> => EnumerableType<A>

Takes a multi-dimensional enumerable and decreases the nesting by one.

``` javascript
import {from} from "most"

flatten([["a", "b"], ["c", "d"]]) // ["a", "b", "c", "d"]
flatten(["a", "b", ["c", "d"]]) // ["a", "b", "c", "d"]
flatten(
  from([
    from(["a", "b"]),
    from(["c", "d"]),
  ])
) // ---a---b---c---d---|
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/flatten.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/flatten.svg?maxAge=2592000&style=flat-square
