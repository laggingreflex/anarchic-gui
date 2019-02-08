const { createElement } = require('react');
const H = exports.H = require('hyperchain/react');
const h = exports.h = H();
const HText = exports.HText = require('hyperchain/text');
const hText = exports.hText = HText();
exports.createElement = createElement;
exports.render = require('./render');
exports.component = require('./component');
