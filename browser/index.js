const { createElement } = require('react');
const H = exports.H = require('hyperchain/react');
const h = exports.h = H();
exports.createElement = createElement;
exports.render = require('./render');
exports.component = require('./component');
