const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // 程式進入點
  output: { // 打包輸出後的檔案
    path: path.resolve(__dirname, 'dist'), // 打包後的檔案路徑及 dist 資料夾
    filename: 'js/[name].js', // 打包後的 js 檔名
  },
  resolve: {
    // alias: {
    //   '%': path.resolve(__dirname, './src'),
    // },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /(node_modules)/, // 排除文件，加速 webpack 打包
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]',
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    compress: false,
    clientLogLevel: 'silent',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      automaticNameDelimiter: '-',
      maxSize: 1024 * 500,
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      }
    }
  }
}
