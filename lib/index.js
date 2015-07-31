'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var querystring = require('querystring');

var through = require('through2');

var querystringStream = {
  stringify: streamify(querystring.stringify),
  parse: streamify(querystring.parse),
  escape: streamify(querystring.escape),
  unescape: streamify(querystring.unescape)
};

module.exports = querystringStream;

function streamify(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return through.obj(write);

    function write(data, _, next) {
      var toPass = [data].concat(args);

      this.push(method.apply(undefined, _toConsumableArray(toPass)));

      next();
    }
  };
}