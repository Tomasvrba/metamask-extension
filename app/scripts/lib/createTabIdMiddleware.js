
module.exports = createTabIdMiddleware

/**
 * Returns a middleware that appends the DApp TabId to the request
 * @param {{ origin: string }} opts - The middleware options
 * @returns {Function}
 */
function createTabIdMiddleware (opts) {
  return function tabIdMiddleware (/** @type {any} */ req, /** @type {any} */ _, /** @type {Function} */ next) {
    req.tabId = opts.tabId
    next()
  }
}