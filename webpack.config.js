const path = require("path");
const HtmlWepbackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js", './src/sass/style.sass'],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "App.js"
    },
    devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              },
            
    ]
    },
    plugins: [
        new HtmlWepbackPlugin({
            template:"./src/index.html"
            
        })
    ]
  }