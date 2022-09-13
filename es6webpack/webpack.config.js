// eslint-disable-next-line no-unused-vars, no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./src/app.js",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
