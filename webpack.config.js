const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    module: {
      rules: [
        {
          test:  /\.css$/, 
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    entry: './src/site.js',
    output: {
      path: path.resolve(`${__dirname}/dist`),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Matt Manoleras',
        template: 'src/index.html'
      })
    ]
  };