# Anarchic GUI

A Node and [React] [Webpack] [Hyperchain] [Carlo] GUI

## Install

```
npm i anarchic-gui
```

## Usage

```
app
├───node.js
└───browser.js
```

* **`node.js`**

  ```js
  const GUI = require('anarchic-gui/node')
  const { runDevServer, build, launch } = GUI({
    browser: require.resolve('./browser')
  })
  await build() // OR
  await runDevServer()
  // then
  launch()
  ```

* **`browser.js`**

  ```js
  const { render, h } = require('anarchic-gui/browser')
  render(() => {
    return h.div('Hello world!')
  })
  ```

```
node node.js
```

### API

#### Node

```js
const GUI = require('anarchic-gui/node')
const {...} = GUI(opts)
```

* **`{...}`** Result of Carlo's [carlo-webpack]
* **`opts`**

  * **`browser`**

    * **`entry`** `[string]` Webpack's [entry file]
    * **`globals`** `[object]` Entries made available as globals via Webpack's [DefinePlugin]

  * **`html`** `[object]` Options for [html-webpack-plugin]

  * **`webpack`** `[object]` Options for `webpack.config`

  * **`carlo`** `[object]` Options for Carlo

#### Browser

```js
const { render, h } = require('anarchic-gui/browser')
render(() => {
  return h.div('Hello World!')
})
```

* **`render`** `[function]` Function that takes a callback that should return an HTML or React(-like) Element which will be rendered in the Browser.

* **`h`** `[object]` [Hyperchain] (`/react`) reviver instance.

```js
const { H, h } = require('anarchic-gui/browser')
```

* **`H`** `[function]` [Hyperchain] (`/react`) reviver function
* **`h`** `[object]` An instance of `H()`

```js
const { createElement } = require('anarchic-gui/browser')
```

* **`createElement`** `[function]` React's `createElement`

[react]: http://reactjs.org
[webpack]: http://webpack.js.org
[hyperchain]: https://github.com/laggingreflex/hyperchain
[carlo-webpack]: https://github.com/laggingreflex/carlo-webpack
[carlo]: https://github.com/GoogleChromeLabs/carlo
[carlo.launch]: https://github.com/GoogleChromeLabs/carlo/blob/master/API.md#carlolaunchoptions
[entry file]: https://webpack.js.org/concepts/#entry
[DefinePlugin]: https://webpack.js.org/plugins/define-plugin
[html-webpack-plugin]: https://github.com/jantimon/html-webpack-plugin
