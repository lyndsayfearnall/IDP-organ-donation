var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"} 
          ]
    }
};