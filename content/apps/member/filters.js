module.exports = ghost => {
  // ghost_head, ghost_foot, slug.reservedSlugs, prePostsRender rss.item rss.feed
  ghost.filters.register('ghost_head', head => head.filter(item => !item.includes('twitter:')))
}
