const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

const publicPath = '/';
const appDir = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  target: isProd ? 'node' : 'web',
  output: {
    publicPath,
    path: appDir,
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
