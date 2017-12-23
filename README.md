# @unction/flatten

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> FunctorType => FunctorType

Takes a multi-dimensional functor and decreases the nesting by one.

``` javascript
flatten([["a", "b"], ["c", "d"]]) // ["a", "b", "c", "d"]
flatten(["a", "b", ["c", "d"]]) // ["a", "b", "c", "d"]
flatten(
  xstream.from([
    xstream.from(["a", "b"]),
    xstream.from(["c", "d"]),
  ])
) // ---a---b---c---d---|
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/flatten.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/flatten.svg?maxAge=2592000&style=flat-square
