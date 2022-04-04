const path = require("path");
const HtmlWwebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve:{
    extensions:['.js','.jsx','.ts','.tsx']
  },
  plugins: [new HtmlWwebpackPlugin({ template: "./src/index.html" })],
};
