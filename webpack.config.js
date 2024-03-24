const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./index.tsx",
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss", ".svg"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/i,
                type: "asset/inline"
            }
        ]
    },
    mode: "development",
    plugins: [new HtmlWebpackPlugin({
        title: "Tic-Tac-Toe",
        template: "index.html"
    })],
}