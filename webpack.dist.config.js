const webpack = require("webpack");
const path    = require("path");
const config  = require("./webpack.config");

config.output = {
  filename: 'js/[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size  
  /*new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  })*/
]);

module.exports = config;
