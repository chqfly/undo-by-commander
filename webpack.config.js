const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isEnvDevelopment = process.env.NODE_ENV === 'development'

console.log(process.env.NODE_ENV, isEnvDevelopment)

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.[chunkHash].js'
  },
  devtool: isEnvDevelopment ? 'inline-source-map' : 'source-map',
  devServer: {
    contentBase: './build'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
}