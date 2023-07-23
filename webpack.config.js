const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, './.env')
} );

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: 'build',
    },
    open: true,
    proxy: {
      '/**': {
        target: 'http://localhost:3000/',
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '/client/public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
