const { render, h } = require('.');

const renderMain = () => {
  if (__ENTRY__) {
    try {
      require(__ENTRY__);
    } catch (error) {
      console.error(error);
      render(() => [
        h.p('Error loading', h.code(` browser.entry:'${__ENTRY__}' `)),
        h.pre(error.stack)
      ]);
    }
  } else {
    render(() => [
      h.p('Please specify a valid', h.code(' `browser.entry` ')),
      h.p('E.g.:'),
      h.ul(h.li(
        h.code('node.js'),
        h.pre(`
          const GUI = require('anarchic-gui/node')
          GUI({
            browser: {
              entry: require.resolve('./browser.js')
            }
          })
        `)
      ), h.li(
        h.code('browser.js'),
        h.pre(`
          const { render, h } = require('anarchic-gui/browser')

          render(() => {
            return h.div('Hello World!')
          })
        `)
      )),
    ]);
  }
}

renderMain();
if (module.hot) module.hot.accept();
if (module.hot) module.hot.accept(__ENTRY__, renderMain);
