const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(
      __dirname, 'dist'
    ),
    filename: "scripts/[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devtool: "source-map",
  devServer: {
    port: 9090,
  },
});
