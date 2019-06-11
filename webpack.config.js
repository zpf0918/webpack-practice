const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./build-utils/webpack.${env}.js`)(env)

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge({
    mode,
    module: {
      rules: [
        {
          test: /\.jpe?g/,
          use: 'url-loader'
        }
      ]
    },
    output: {
      filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
  },
  modeConfig(mode)
  )
}