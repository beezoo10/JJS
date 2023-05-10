const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/, /client\/stylesheets\/modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    proxy: {
      '/test': {
        target: 'http://localhost:3000/',
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
