var webpack = require('webpack');

module.exports = {
  entry: {
      main: './src/app.js',
  },
  output: {
      path: './',
      filename: './build/main-dev.js',
  },
  debug: true,
  devtool: "source-map",
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
              NODE_ENV: JSON.stringify('development'),
              API_URL: JSON.stringify('http://127.0.0.1:8000/'),
              PRODUCTION: JSON.stringify(false),
              VERSION: JSON.stringify("1.0"),
              BROWSER_SUPPORTS_HTML5: true,
            }
        })
  ]
}
