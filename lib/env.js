var webpack = require('webpack');

module.exports = new webpack.DefinePlugin({
  'process.env': Object.keys(process.env).reduce(function(o, k) {
    o[k] = JSON.stringify(process.env[k]);
    return o;
  }, {})
});
