var webpack = require('webpack');

module.exports = {
  entry: {
      app: './src/app.js',
      vendor: ["react", "react-dom"],
  },
  output: {
      path: './',
      filename: './build/main.js',
  },
  debug: true,
  // devtool: "source-map",
  module: {
    loaders: [
      {
          test: /\.js/,
          loader: 'babel',
      }
    ],
    preLoaders: [
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production'),
              API_URL: JSON.stringify('http://127.0.0.1:8000/'),
              PRODUCTION: JSON.stringify(false),
              VERSION: JSON.stringify("1.0"),
              BROWSER_SUPPORTS_HTML5: true,
            }
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./build/main.vendor.js"),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            compress: {
                warnings: false
            },
            comments: false
        })
  ]
}
