const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge({
    mode,
    output: {
      filename: 'bundle-test.js'
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
  },
    modeConfig({ mode, presets}) 
  )
}