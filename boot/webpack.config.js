const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 9001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "boot",
      filename: "remoteEntry.js",
      exposes: {
        "./components": "./src/components",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
