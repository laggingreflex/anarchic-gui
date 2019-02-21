const Path = require('path');
const webpack = require('webpack');
const extract = require('mini-css-extract-plugin');

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

  if (opts.target) config.target = opts.target;
  if (opts.node) config.node = opts.node;
  if (opts.mode) config.mode = opts.mode;
  if (opts.dev && !config.mode) config.mode = 'development';

  const { rules } = config.module = { rules: [] };
  const plugins = config.plugins = [];

  rules.push({
    test: /\.css$/,
    use: [opts.dev ? require.resolve('style-loader') : extract.loader, require.resolve('css-loader')]
  });
  rules.push({
    test: /\.styl$/,
    use: [
      opts.dev ? require.resolve('style-loader') : extract.loader,
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          localIdentName: '[local]_[hash:base64:5]',
          camelCase: true,
          // minimize: true,
          sourceMap: true
        }
      },
      require.resolve('stylus-loader')
    ]
  });

  const entries = Object.entries(opts.globals || {}).reduce((globals, [key, value]) => ({ ...globals, [key]: JSON.stringify(value, null, 2) }), {});
  if (entries.__ENTRY__) throw new Error(`'__ENTRY__' is already used by this library, please choose another key`);
  plugins.push(new webpack.DefinePlugin({
    ...entries,
    __ENTRY__: JSON.stringify(opts.entry),
  }));
  plugins.push(new extract({ filename: 'app.css' }));

  return config;
};
