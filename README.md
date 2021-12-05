# Webpack Starter Kit

## Features

* Full TypeScript, ES6 and ES5 support (with applicable Webpack wrappers).
* TypeScript and JavaScript linting (using a TSLint ruleset – driven by ESLint - rules can be adjusted to suit your team's needs).
* ES5 output, for legacy browser support.
* Globbing
    * No need to add imports anywhere.
    * All JS and CSS files can now be added to each component (best practice is under /clientlib/js or /clientlib/(s)css)
    * No .content.xml or js.txt/css.txt files needed as everything is run through Webpack
    * The globber pulls in all JS files under the /component/ folder. Webpack allows CSS/SCSS files to be chained in via JS files. They are pulled in through sites.js.
    * The only files consumed by AEM are the output files site.js and site.css, the resources folder in /clientlib-site as well as dependencies.js and dependencies.css in /clientlib-dependencies
* Chunks
    * Main (site js/css)
* Full Sass/Scss support (Sass is compiled to CSS via Webpack).
* Static webpack development server with built in proxy to a local instance of AEM

## Installation

1. Install [NodeJS](https://nodejs.org/en/download/) (v10+), globally. This will also install `npm`.
2. Navigate to `webpack-starter-kit` and run `npm install`.

## Usage

The following npm scripts drive the frontend workflow:

* `npm run dev` - Full build of client libraries with JS optimization disabled (tree shaking, etc) and source maps enabled and CSS optimization disabled.
* `npm run start` - Starts the webpack-dev-server

### General

The webpack-starter-kit project compiles the code under the `webpack-starter-kit/src` folder and outputs the compiled CSS and JS, and any resources beneath a folder named `webpack-starter-kit/dist`.

### JavaScript

* **Optimization** - for production builds, all JS that is not being used or
called is removed.

### CSS

* **Autoprefixing** - all CSS is run through a prefixer and any properties that require prefixing will automatically have those added in the CSS.
* **Optimization** - at post, all CSS is run through an optimizer (cssnano) which normalizes it according to the following default rules:
    * Reduces CSS calc expression wherever possible, ensuring both browser compatibility and compression.
    * Converts between equivalent length, time and angle values. Note that by default, length values are not converted.
    * Removes comments in and around rules, selectors & declarations.
    * Removes duplicated rules, at-rules and declarations. Note that this only works for exact duplicates.
    * Removes empty rules, media queries and rules with empty selectors, as they do not affect the output.
    * Merges adjacent rules by selectors and overlapping property/value pairs.
    * Ensures that only a single `@charset` is present in the CSS file and moves it to the top of the document.
    * Replaces the CSS initial keyword with the actual value, when the resulting output is smaller.
    * Compresses inline SVG definitions with SVGO.
* **Cleaning** - explicit clean task for wiping out the generated CSS, JS and Map files on demand.
* **Source Mapping** - development build only.

#### Notes

* Only utilizes webpack dev config - i.e., no prod-only webpack config files.

### Static Webpack Development Server

Included in the webpack-starter-kit module is a [webpack-dev-server](https://github.com/webpack/webpack-dev-server) that provides live reloading for rapid front-end development. The setup leverages the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to automatically inject CSS and JS compiled from the webpack-starter-kit module into a static HTML template.

#### Important files

* `webpack-starter-kit/webpack.dev.js` - This contains the configuration for the webpack-dev-serve and points to the html template to use.
* `webpack-starter-kit/src/main/webpack/static/index.html` - This is the static HTML that the server will run against. This allows a developer to make CSS/JS changes and see them immediately reflected in the markup. 

#### Using

1. Navigate inside the `webpack-starter-kit` folder.
2. Run the following command `npm run start` to start the webpack dev server. Once started it should open a browser (localhost:8080 or the next available port).
3. You can now modify CSS, JS, SCSS, and TS files and see the changes immediately reflected in the webpack dev server.
