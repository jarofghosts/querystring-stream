const querystring = require('querystring')

const test = require('tape')

const querystream = require('../lib')

test('.parse() parses querystrings', t => {
  t.plan(1)

  const stream = querystream.parse()

  const testString = 'dogs=false&cats=true&lol=2&hardy=har'

  stream.on('data', data => t.deepEqual(data, querystring.parse(testString)))

  stream.write(testString)
})

test('.parse() passes along arguments', t => {
  t.plan(1)

  const stream = querystream.parse('|', '>')

  const testString = 'dogs>false|cats>true|lol>2|hardy=har'

  stream.on('data', data => {
    t.deepEqual(data, querystring.parse(testString, '|', '>'))
  })

  stream.write(testString)
})

test('.stringify() stringifies objects into querystrings', t => {
  t.plan(1)

  const stream = querystream.stringify()

  const testObj = {
    dogs: false,
    cats: true,
    lol: 2,
    hardy: 'har'
  }

  stream.on('data', data => {
    t.equal(data.toString(), querystring.stringify(testObj))
  })

  stream.write(testObj)
})

test('.stringify() passes along arguments', t => {
  t.plan(1)

  const stream = querystream.stringify('!', '<')

  const testObj = {
    dogs: false,
    cats: true,
    lol: 2,
    hardy: 'har'
  }

  stream.on('data', data => {
    t.equal(data.toString(), querystring.stringify(testObj, '!', '<'))
  })

  stream.write(testObj)
})

test('.escape() escapes strings', t => {
  t.plan(1)

  const stream = querystream.escape()

  const testString = 'escape this string?! sure, why not.'

  stream.on('data', data => {
    t.equal(data.toString(), querystring.escape(testString))
  })

  stream.write(testString)
})

test('.unescape() unescapes strings', t => {
  t.plan(1)

  const stream = querystream.unescape()

  const testString = 'escape%20this%20string%3F!%20sure%2C%20why%20not%3F'

  stream.on('data', data => {
    t.equal(data.toString(), querystring.unescape(testString))
  })

  stream.write(testString)
})
