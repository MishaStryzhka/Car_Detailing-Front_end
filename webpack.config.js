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
    //============ uk ============
    new HtmlWebpackPlugin({
      template: './src/uk/index.html',
      filename: 'uk/index.html',
      publicPath: '/uk/',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/hand-wash.html',
      filename: 'uk/hand-wash.html',
      publicPath: '/uk/hand-wash',
      inject: false,

      templateParameters: {
        class: 'header-pages',
      },
    }),

    new HtmlWebpackPlugin({
      template: './src/uk/dry-cleaning.html',
      filename: 'uk/dry-cleaning.html',
      publicPath: '/uk/dry-cleaning',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/hard-wax.html',
      filename: 'uk/hard-wax.html',
      publicPath: '/uk/hard-wax',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/polishing.html',
      filename: 'uk/polishing.html',
      publicPath: '/uk/polishing',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/disk-restoration.html',
      filename: 'uk/disk-restoration.html',
      publicPath: '/uk/disk-restoration',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/window-tinting.html',
      filename: 'uk/window-tinting.html',
      publicPath: '/uk/window-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/headlight-tinting.html',
      filename: 'uk/headlight-tinting.html',
      publicPath: '/uk/headlight-tinting',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/ceramic-coating.html',
      filename: 'uk/ceramic-coating.html',
      publicPath: '/uk/ceramic-coating',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/uk/prices.html',
      filename: 'uk/prices.html',
      publicPath: '/uk/prices',
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
