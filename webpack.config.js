const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/hand-wash.html',
      filename: 'ua/hand-wash.html',
      publicPath: '/ua/hand-wash',
      inject: false,
    }),

    new HtmlWebpackPlugin({
      template: './src/ua/dry-cleaning.html',
      filename: 'ua/dry-cleaning.html',
      publicPath: '/ua/dry-cleaning',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/hard-wax.html',
      filename: 'ua/hard-wax.html',
      publicPath: '/ua/hard-wax',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/polishing.html',
      filename: 'ua/polishing.html',
      publicPath: '/ua/polishing',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/disk-restoration.html',
      filename: 'ua/disk-restoration.html',
      publicPath: '/ua/disk-restoration',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/window-tinting.html',
      filename: 'ua/window-tinting.html',
      publicPath: '/ua/window-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/headlight-tinting.html',
      filename: 'ua/headlight-tinting.html',
      publicPath: '/ua/headlight-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/ceramic-coating.html',
      filename: 'ua/ceramic-coating.html',
      publicPath: '/ua/ceramic-coating',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/ua/prices.html',
      filename: 'ua/prices.html',
      publicPath: '/ua/prices',
      inject: false,
    }),

    //============ cs ============
    new HtmlWebpackPlugin({
      template: './src/cs/index.html',
      filename: 'index.html',
      publicPath: '/',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/hand-wash.html',
      filename: 'hand-wash.html',
      publicPath: '/hand-wash',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/dry-cleaning.html',
      filename: 'dry-cleaning.html',
      publicPath: '/dry-cleaning',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/hard-wax.html',
      filename: 'hard-wax.html',
      publicPath: '/hard-wax',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/polishing.html',
      filename: 'polishing.html',
      publicPath: '/polishing',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/disk-restoration.html',
      filename: 'disk-restoration.html',
      publicPath: '/disk-restoration',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/window-tinting.html',
      filename: 'window-tinting.html',
      publicPath: '/window-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/headlight-tinting.html',
      filename: 'headlight-tinting.html',
      publicPath: '/headlight-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/ceramic-coating.html',
      filename: 'ceramic-coating.html',
      publicPath: '/ceramic-coating',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/cs/prices.html',
      filename: 'prices.html',
      publicPath: '/prices',
      inject: false,
    }),

    //============ en ============
    new HtmlWebpackPlugin({
      template: './src/en/index.html',
      filename: 'en/index.html',
      publicPath: '/en/',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/hand-wash.html',
      filename: 'en/hand-wash.html',
      publicPath: '/en/hand-wash',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/dry-cleaning.html',
      filename: 'en/dry-cleaning.html',
      publicPath: '/en/dry-cleaning',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/hard-wax.html',
      filename: 'en/hard-wax.html',
      publicPath: '/en/hard-wax',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/polishing.html',
      filename: 'en/polishing.html',
      publicPath: '/en/polishing',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/disk-restoration.html',
      filename: 'en/disk-restoration.html',
      publicPath: '/en/disk-restoration',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/window-tinting.html',
      filename: 'en/window-tinting.html',
      publicPath: '/en/window-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/headlight-tinting.html',
      filename: 'en/headlight-tinting.html',
      publicPath: '/en/headlight-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/ceramic-coating.html',
      filename: 'en/ceramic-coating.html',
      publicPath: '/en/ceramic-coating',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/en/prices.html',
      filename: 'en/prices.html',
      publicPath: '/en/prices',
      inject: false,
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
    new MiniCssExtractPlugin({
      filename: 'styles.css', // це файл, який міститиме всі стилі\
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
