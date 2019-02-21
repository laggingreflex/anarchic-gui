const CarloWebpack = require('carlo-webpack');
const webpackConfig = require('./browser/webpack.config');

module.exports = (opts) => {
  opts = opts || {};
  opts.browser = opts.browser || {};
  const config = webpackConfig({
    dev: opts.dev,
    entry: (opts.browser && opts.browser.entry) || opts.browser,
    globals: opts.browser.globals,
    ...opts.webpack,
  });
  opts.carlo = opts.carlo || {};
  return CarloWebpack({
    dev: opts.dev,
    webpack: { config },
    carlo: opts.carlo,
    html: opts.html,
  });
};
