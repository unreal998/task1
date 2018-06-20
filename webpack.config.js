const path = require("path");
const HtmlWepbackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "App.js"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
    ]
    },
    plugins: [
        new HtmlWepbackPlugin({
            template:"./src/index.html"
            
        })
    ]
  }