module.exports = {
  plugins: [
    require('babel-plugin-check-es2015-constants'),
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-es2015-block-scoped-functions'),
    require('babel-plugin-transform-es2015-block-scoping'),
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-literals'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-template-literals')
  ]
}
