module.exports = {
    entry: './src/app',
    output: {
        path: './src',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['','.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}, 
        ]
    },
    devServer : {
        contentBase: './src',
        stats: 'minimal'
    }
};
