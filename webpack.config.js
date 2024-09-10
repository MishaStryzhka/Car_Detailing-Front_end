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
    //============ ua ============
    new HtmlWebpackPlugin({
      template: './src/ua/index.html',
      filename: 'ua/index.html',
      publicPath: '/ua/',
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/hand-wash.html',
      filename: 'ua/hand-wash.html',
      publicPath: '/ua/',
    }),

    //============ cs ============
    new HtmlWebpackPlugin({
      template: './src/cs/index.html',
      filename: 'index.html',
      publicPath: '/cs/',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/hand-wash.html',
      filename: 'hand-wash.html',
      publicPath: '/cs/',
    }),

    //============ en ============
    new HtmlWebpackPlugin({
      template: './src/en/index.html',
      filename: 'en/index.html',
      publicPath: '/en/',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/hand-wash.html',
      filename: 'en/hand-wash.html',
      publicPath: '/en/',
    }),

    //============ images ============
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
