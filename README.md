# hapi-pino

[Hapi](http://hapijs.com) plugin for the [Pino](https://github.com/mcollina/pino) logger. It logs in JSON for easy
post-processing.
It is faster than [good](http://npm.im/good) console logger by a 25%
factor (40% when using [extreme
mode](https://github.com/mcollina/pino#extreme)

## Install

```
npm i hapi-pino --save
```

## Usage

```js
'use strict'

const Hapi = require('hapi')

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 3000
})

server.register({
  register: require('pino').register,
  options: {
    extreme: true // default false
  }
}, (err) => {
  if (err) {
    throw err
  }
})

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    request.logger.info('a word from the handler')
    return reply('hello world')
  }
})

// Start the server
server.start((err) => {
  if (err) {
    throw err
  }
  server.app.logger.info('logging with Pino')
})
```

## Acknowledgements

This project was kindly sponsored by [nearForm](http://nearform.com).

## License

MIT
