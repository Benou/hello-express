/**
 * Created by Benou on 27/08/2016.
 */

import path from 'path'
import Config from 'webpack-config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default new Config()
  .merge({
    context: path.join(__dirname, 'src', 'client'),
    entry: {
      app: [
        './app/app.module.js'
      ]
    },
    output: {
      filename: '[name].js',
      sourceMapFilename: '[name].map'
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'standard',
          exclude: /(node_modules|\.spec\.js)/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'ng-annotate!babel',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            'style', 'css!sass'
          )
        },
        {
          test: /\.html$/,
          loader: 'html'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body'
      })
    ],
    standard: {
      parser: 'babel-eslint'
    }
  })
