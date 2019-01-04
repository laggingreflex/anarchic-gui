const { H } = require('.');

/**
 * @typedef {object} opts
 * @property {object} [style] CSS Modules Style object
 */
/**
/**
 * @typedef {object} callbackExtraParams
 * @property {function} h Hyperchain reviver function
 */
/**
 * @callback callback
 * @param props
 * @param {callbackExtraParams} params
 */
/**
 * @param {opts|callback} [opts]
 * @param {callback} callback
 */
module.exports = (opts, callback) => {
  if (typeof opts === 'function')[opts, callback] = [{}, opts];
  const h = H({ style: opts.style });
  return props => callback(props, { h });
};
