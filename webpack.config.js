const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/_start/app.tsx",
    mode: 'development',
    target: ['web', 'es5'],
    output: {
        path: path.resolve(__dirname, "public/dist/"),
        publicPath: '/public/dist',
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: ['src', 'node_modules'],
        alias: {
            Assets: path.resolve(__dirname, './src/assets'),
            Source: path.resolve(__dirname, './src'),
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.(woff|woff2|eot|ttf|svg|otf)$/, loader: 'file-loader', options: { limit: 100000 } },
            { test: /\.(css|scss)$/, use: ['style-loader', { loader: 'css-loader', options: { url: false } }, 'sass-loader'] }
        ]
    },
    devServer: {
        devMiddleware: {
            publicPath: "http://localhost:3000/",
        },
        static: [
            {
                directory: path.resolve(__dirname, "public"),
                publicPath: "/",
            }
        ],
        port: 3000
    }
};