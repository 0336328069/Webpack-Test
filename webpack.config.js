const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main : ['./src/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        port: 3000,
        open: true
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Website Test",
            filename: "index.html"
        })
    ],
    optimization: {
        splitChunks:{
            chunks: 'all'
        }
    },
    devtool: 'inline-source-map',
}