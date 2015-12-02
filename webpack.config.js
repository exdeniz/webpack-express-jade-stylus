'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BowerWebpackPlugin = require("bower-webpack-plugin");

// postcss
var autoprefixer = require('autoprefixer');
var clearfix = require('postcss-clearfix');
var postcsscenter = require('postcss-center');
var postcssshort = require('postcss-short');
var postcsseasings = require('postcss-easings');
var postassets = require('postcss-assets');
var lost = require('lost');
module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'app/index.tpl.html',
    //   inject: 'body',
    //   filename: 'index.html'
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"

    }),
    new BowerWebpackPlugin({
        modulesDirectories: ['bower_components'],
        manifestFiles: ['bower.json', '.bower.json'],
        includes: /.*/,
        excludes: /.*\.less$/
      })
  ],
  module: {
    loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }, {
          test: /\.json?$/,
          loader: 'json'
        }, {
          test: /\.css$/,
          loader: 'style!css'
        },{
            test: /\.jade$/,
            loader: "jade-loader?self"
        },{
            test: /\.styl$/,
            loader: "style!css!postcss!stylus"
        },{
            test: /\.(jpe?g|png|gif)$/,
            loader: 'file?name=img/[name].[ext]!image-webpack'
        },{
            test: /\.woff$/,
            loader: 'url?limit=1000000'
        }
    ]
  },
  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
    },
  postcss: function () {
        return [autoprefixer, clearfix, postcsscenter, postcssshort, postcsseasings,  postassets({
                    loadPaths: ['app/assets/icons/']

                }), lost];
    },

};
