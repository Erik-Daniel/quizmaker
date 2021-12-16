let path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: path.join(__dirname, './index.jsx'),
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    }
}