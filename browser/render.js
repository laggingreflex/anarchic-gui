const { render } = require('react-dom');
const { h } = require('.');
const target = document.getElementById('app') || document.body;

/**
 * @param app
 */
module.exports = (app) => {
  try {
    render(h(app), target);
  } catch (error) {
    console.error(error);
    render(h.pre.error(error.stack), target);
  } finally {
    target.classList.remove('loading');
  }
};
