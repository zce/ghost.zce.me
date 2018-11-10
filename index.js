const path = require('path')
const config = require('@zce/ghost/core/server/config')

// config.set('database:debug', true)
config.set('paths:contentPath', path.resolve('content'))

const ghost = require('@zce/ghost')
ghost().then(server => server.start())
