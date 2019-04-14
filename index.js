const path = require('path')
const config = require('ghost/core/server/config')

// config.set('database:debug', true)
config.set('paths:contentPath', path.resolve('content'))

const ghost = require('ghost')
ghost().then(server => server.start())
