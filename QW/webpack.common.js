const path = require("path");
const htmlP = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: miniCss.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jp?g|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlP({
      favicon: "./src/favicon.png",
      template: "./src/index.html",
      publicPath: "/",
      filename: "index.html",
    }),
    new miniCss({
      filename: "stylez.css",
      chunkFilename: "[id].css",
    }),
  ],
};
