# babel-preset-futurify

A simple version of the future.

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/babel-preset-futurify.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/babel-preset-futurify
 https://travis-ci.org/sethvincent/babel-preset-futurify
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

This preset is a subset of babel plugins focused on the most essential parts of es2015.

### Plugins included

- [babel-plugin-check-es2015-constants](https://npmjs.com/babel-plugin-check-es2015-constants)
- [babel-plugin-transform-es2015-arrow-functions](https://npmjs.com/babel-plugin-transform-es2015-arrow-functions)
- [babel-plugin-transform-es2015-block-scoped-functions](https://npmjs.com/babel-plugin-transform-es2015-block-scoped-functions)
- [babel-plugin-transform-es2015-block-scoping](https://npmjs.com/babel-plugin-transform-es2015-block-scoping)
- [babel-plugin-transform-es2015-function-name](https://npmjs.com/babel-plugin-transform-es2015-function-name)
- [babel-plugin-transform-es2015-literals](https://npmjs.com/babel-plugin-transform-es2015-literals)
- [babel-plugin-transform-es2015-shorthand-properties](https://npmjs.com/babel-plugin-transform-es2015-shorthand-properties)
- [babel-plugin-transform-es2015-template-literals](https://npmjs.com/babel-plugin-transform-es2015-template-literals)

## The future of the future

This preset will be modified as browser support changes and new versions of ecmascript are released.

## Don't depend on this in npm packages

I recommend not using this preset, or using babel at all, for packages that are released on npm. If the only thing keeping your code from running in older browsers or in older versions of node is es2015+ syntax, refactor to remove that syntax. This is easier for everybody.

I've created this specifically for use in applications where the syntax improvements are helpful for browser code.

## Install

```sh
npm install --save-dev babel-preset-futurify
```

## Usage

Add the following line to your .babelrc file:

```json
{
  "presets": ["babel-preset-futurify"]
}
```

## Conduct

It is important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CONDUCT.md)

## License

[ISC](LICENSE.md)
