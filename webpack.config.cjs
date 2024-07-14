const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPrerenderPlugin = require('html-webpack-prerender-plugin');

const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.join(__dirname, "/"), // the bundle output path
        filename: "[name].[contenthash].js", // the name of the bundle
        asyncChunks: true,
        libraryTarget: 'umd',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
            minify: true,
            // inject: true,
            // chunks: ['index'],
        }),
        new HtmlWebpackPrerenderPlugin({ main: '#app' }),
        // new MiniCssExtractPlugin(),
    ],
    devServer: {
        port: 3030, // you can change the port
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],    // используемые плагины
                        // compact: true,
                    }
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            // {
            //     test: /\.css$/i,
            //     use: [
            //         // MiniCssExtractPlugin.loader,
            //         // "style-loader",
            //         // 'css-loader'
            //     ],
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        // @todo настроить resolve
    },
    // optimization: {
    //     minimize: true,
    //     // minimizer: [
    //     //     new CssMinimizerPlugin(),
    //     // ],
    // },
    // plugins: [new MiniCssExtractPlugin()],
};