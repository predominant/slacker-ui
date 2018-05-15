const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject:   'body'
});

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.bundle.js'
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }, {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader" }, // compiles Sass to CSS
          { loader: "postcss-loader" }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          { loader: "file-loader" }
        ]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
