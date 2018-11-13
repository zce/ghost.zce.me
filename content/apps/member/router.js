module.exports = ghost => {}

// const path = require('path')
// const express = require('express')
// const routing = require('@zce/ghost/core/server/services/routing')
// const middleware = require('./middleware')

// const memberRouter = express.Router()

// function _renderer (req, res) {
//   res.routerOptions = {
//     type: 'custom',
//     templates: 'member',
//     defaultTemplate: path.resolve(__dirname, 'views', 'member.hbs')
//   }

//   // Renderer begin
//   // Format data
//   let data = {}

//   if (res.error) {
//     data.error = res.error
//   }

//   // Render Call
//   return routing.helpers.renderer(req, res, data)
// }

// // password-protected frontend route
// memberRouter
//   .route('/')
//   .get(middleware.auth, _renderer)
//   .post(middleware.auth, _renderer)

// module.exports = memberRouter
// module.exports.renderer = _renderer
