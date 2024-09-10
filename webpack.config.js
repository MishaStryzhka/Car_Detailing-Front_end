const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/Car_Detailing-Front_end/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: '/Car_Detailing-Front_end/',
    }),
    new HtmlWebpackPlugin({
      filename: 'hand-wash.html',
      template: './src/hand-wash.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'dry-cleaning.html',
      template: './src/dry-cleaning.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'hard-wax.html',
      template: './src/hard-wax.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'polishing.html',
      template: './src/polishing.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images/img',
          to: 'images/img',
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',
};
