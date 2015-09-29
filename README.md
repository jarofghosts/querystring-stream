# querystring-stream

[![Build Status](https://img.shields.io/travis/jarofghosts/querystring-stream.svg?style=flat-square)](https://travis-ci.org/jarofghosts/querystring-stream)
[![npm install](https://img.shields.io/npm/dm/querystring-stream.svg?style=flat-square)](https://www.npmjs.org/package/querystring-stream)
[![npm version](https://img.shields.io/npm/v/querystring-stream.svg?style=flat-square)](https://www.npmjs.org/package/querystring-stream)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/querystring-stream.svg?style=flat-square)](https://github.com/jarofghosts/querystring-stream/blob/master/LICENSE)

transform-stream interface to querystring

## example

```javascript
const querystream = require('querystring-stream')

someObjectStream
  .pipe(querystream.stringify())
  .pipe(process.stdout)
```

## API

Exposes all of the same methods as
[node's querystring module](https://nodejs.org/api/querystring.html), but as
transform streams for easy piping. See node's docs for explanations of optional
arguments to `parse` and `stringify`.

`querystream.parse([sep, eq, options]) -> TransformStream`

`querystream.stringify([sep, eq, options]) -> TransformStream`

`querystream.escape() -> TransformStream`

`querystream.unescape() -> TransformStream`

## license

MIT
