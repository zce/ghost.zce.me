const registerRouter = require('./router')
const registerHelpers = require('./helpers')
const registerFilters = require('./filters')

module.exports = {
  activate (ghost) {
    // ghost.routeService.registerRouter('/member/', router)
    // ghost.filters.register('ghost_head', this.headerFilter)
    // // ghost.api.tags.browse().then(res => console.log(res))
    registerHelpers(ghost)
    registerFilters(ghost)
    registerRouter(ghost)
  }
 }
