/**
 * Created by Benou on 27/08/2016.
 */

import path from 'path'
import webpack from 'webpack'
import Config from 'webpack-config'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default new Config()
  .extend('webpack.base.config.js')
  .merge({
    output: {
      path: path.join(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(['dist'], {
        verbose: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
