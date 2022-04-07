const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  }
  if (isProd) { // minimize html css js
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

const babelOptions = (preset) => {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }
  if (preset) {
    options.presets.push(preset)
  }
  return options
}


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ['@babel/polyfill', './main.tsx'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
      app: path.resolve(__dirname, "src/app"),
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    hot: isDev
  },
  devtool: isProd ? false : 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: "assets/html/index.html",
      favicon: "assets/html/favicon.ico",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'assets/[name].[ext]',
        }
      },

    ]
  }
}