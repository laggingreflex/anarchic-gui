const Path = require('path');
const webpack = require('webpack');

module.exports = (...opts) => {
  opts = Object.assign({
    cwd: process.cwd(),
    port: process.env.PORT || 8000,
    verbose: false,
  }, ...opts);

  const config = {};

  config.context = opts.context || opts.cwd || __dirname;
  config.entry = require.resolve('./entry');

  config.output = {
    filename: 'app.js',
    path: Path.join(opts.cwd, 'dist'),
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: _ => `file:///${_.absoluteResourcePath.replace(/\\/g, '/')}`,
    ...opts.output,
  };

  const { rules } = config.module = { rules: [] };
  const plugins = config.plugins = [];

  const entries = Object.entries(opts.globals || {}).reduce((globals, [key, value]) => ({ ...globals, [key]: JSON.stringify(value, null, 2) }), {});
  if (entries.__ENTRY__) throw new Error(`'__ENTRY__' is already used by this library, please choose another key`);
  plugins.push(new webpack.DefinePlugin({
    ...entries,
    __ENTRY__: JSON.stringify(opts.entry),
  }));

  return config;
};
