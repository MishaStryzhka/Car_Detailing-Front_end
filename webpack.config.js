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
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
          },
        },
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
      publicPath: '/ua/hand-wash',
    }),

    new HtmlWebpackPlugin({
      template: './src/ua/dry-cleaning.html',
      filename: 'ua/dry-cleaning.html',
      publicPath: '/ua/dry-cleaning',
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/hard-wax.html',
      filename: 'ua/hard-wax.html',
      publicPath: '/ua/hard-wax',
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/polishing.html',
      filename: 'ua/polishing.html',
      publicPath: '/ua/polishing',
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/disk-restoration.html',
      filename: 'ua/disk-restoration.html',
      publicPath: '/ua/disk-restoration',
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/window-tinting.html',
      filename: 'ua/window-tinting.html',
      publicPath: '/ua/window-tinting',
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/headlight-tinting.html',
      filename: 'ua/headlight-tinting.html',
      publicPath: '/ua/headlight-tinting',
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/ceramic-coating.html',
      filename: 'ua/ceramic-coating.html',
      publicPath: '/ua/ceramic-coating',
    }),

    //============ cs ============
    new HtmlWebpackPlugin({
      template: './src/cs/index.html',
      filename: 'index.html',
      publicPath: '/',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/hand-wash.html',
      filename: 'cs/hand-wash.html',
      publicPath: '/hand-wash',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/dry-cleaning.html',
      filename: 'cs/dry-cleaning.html',
      publicPath: '/dry-cleaning',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/hard-wax.html',
      filename: 'cs/hard-wax.html',
      publicPath: '/hard-wax',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/polishing.html',
      filename: 'cs/polishing.html',
      publicPath: '/polishing',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/disk-restoration.html',
      filename: 'cs/disk-restoration.html',
      publicPath: '/disk-restoration',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/window-tinting.html',
      filename: 'cs/window-tinting.html',
      publicPath: '/window-tinting',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/headlight-tinting.html',
      filename: 'cs/headlight-tinting.html',
      publicPath: '/headlight-tinting',
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/ceramic-coating.html',
      filename: 'cs/ceramic-coating.html',
      publicPath: '/ceramic-coating',
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
      publicPath: '/en/hand-wash',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/dry-cleaning.html',
      filename: 'en/dry-cleaning.html',
      publicPath: '/en/dry-cleaning',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/hard-wax.html',
      filename: 'en/hard-wax.html',
      publicPath: '/en/hard-wax',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/polishing.html',
      filename: 'en/polishing.html',
      publicPath: '/en/polishing',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/disk-restoration.html',
      filename: 'en/disk-restoration.html',
      publicPath: '/en/disk-restoration',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/window-tinting.html',
      filename: 'en/window-tinting.html',
      publicPath: '/en/window-tinting',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/headlight-tinting.html',
      filename: 'en/headlight-tinting.html',
      publicPath: '/en/headlight-tinting',
    }),
    new HtmlWebpackPlugin({
      template: './src/en/ceramic-coating.html',
      filename: 'en/ceramic-coating.html',
      publicPath: '/en/ceramic-coating',
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
