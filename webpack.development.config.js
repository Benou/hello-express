/**
 * Created by Benou on 27/08/2016.
 */

import Config from 'webpack-config'

export default new Config()
  .extend('webpack.base.config')
  .merge({
    debug: true,
    devtool: 'source-map',
    devServer: {
      colors: true,
      inline: true,
      open: true
    }
  })
