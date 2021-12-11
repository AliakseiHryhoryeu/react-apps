const path = require('path')                                                          // Absolute path to the folder
const HTMLWebpackPlugin = require('html-webpack-plugin')                              // Create index.html and add in him links to scripts 
const { CleanWebpackPlugin } = require('clean-webpack-plugin')                        // Delete previous builds
const MiniCssExtractPlugin = require('mini-css-extract-plugin')                       // Optimize css
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')   // Optimize html css js
const TerserWebpackPlugin = require('terser-webpack-plugin')                          // Optimize html css js

const isDev = process.env.NODE_ENV === 'development'              // mode in which to collect build
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
  mode: "development", // operating mode webpack
  entry: ['@babel/polyfill', './index.jsx'], // entry file
  output: {
    path: path.resolve(__dirname, "dist"),  // path to final build folder
    filename: "[name].[hash].js" // how to name files
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png'], // default types which Webpack looks for first if no extension is specified
    alias: {
      '@img': path.resolve(__dirname, "src/assets/img"),
      '@': path.resolve(__dirname, "src")
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    hot: isDev
  },
  devtool: isProd ? false : 'source-map',
  plugins: [
    new HTMLWebpackPlugin({ // create index.html and add in him links to scripts
      template: "./index.html",
      favicon: "./favicon.ico",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(), // cleaning from previous builds
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ],
  module: {
    rules: [ // types of processed files and their loaders
      {
        test: /\.m?js$/, // JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions()
        }
      },
      {
        test: /\.jsx$/, // ReactJS
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/, //sass scss css
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|webp)$/, // Images
        type: 'asset/resource' // webpack v5+
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
    ]
  }
}