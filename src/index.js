const querystring = require('querystring')

const through = require('through2')

const querystringStream = {
  stringify: streamify(querystring.stringify),
  parse: streamify(querystring.parse),
  escape: streamify(querystring.escape),
  unescape: streamify(querystring.unescape)
}

module.exports = querystringStream

function streamify (method) {
  return (...args) => {
    return through.obj(write)

    function write (data, _, next) {
      const toPass = [data].concat(args)

      this.push(method(...toPass))

      next()
    }
  }
}
