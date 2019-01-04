// if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
//   module.exports = require('./browser');
// } else {
//   module.exports = require('./node');
// }

const { name } = require('./package');
throw new Error(`Please require either from '${name}/browser' or '${name}/node'`);
