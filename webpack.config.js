/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            [
              "react-transform", {
                transforms: [{
                  transform: "react-transform-hmr",
                  imports: ["react"],
                  locals: ["module"]
                }, {
                  transform: "react-transform-catch-errors",
                  imports: ["react", "redbox-react"]
                }]
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "raw-loader"
        ]
      },
      {
        test: /\.svg$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          mimetype: "image/svg+xml"
        },
        include: path.join(__dirname, "assets")
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        options: {
          mimetype: "image/png"
        },
        include: path.join(__dirname, "assets")
      },
      {
        test: /\.gif$/,
        loader: "url-loader",
        options: {
          mimetype: "image/gif"
        },
        include: path.join(__dirname, "assets")
      },
      {
        test: /\.jpg$/,
        loader: "url-loader",
        options: {
          mimetype: "image/jpg"
        },
        include: path.join(__dirname, "assets")
      },
    ]
  }
};
