const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const AngularAnnotatePlugin = require('ng-annotate-webpack-plugin');

const path = require('path');
const PROD = false;

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/public',
    filename: PROD ? 'bundle.min.js' : 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          __dirname + '/app',
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      {
        test: /\.s?css$/,
        include: [
          __dirname + '/app/assets/css',
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('assets/css/styles.css'),
    new AngularAnnotatePlugin({
      add: true,
    }),
  ],
};

if (PROD) {
  module.exports.plugins.push(new UglifyJSPlugin());
}
