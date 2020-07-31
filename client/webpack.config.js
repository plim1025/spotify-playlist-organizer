const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: __dirname,
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(t|j)sx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.(png|jpg|)$/, loader: 'url-loader' }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true,
    }
};