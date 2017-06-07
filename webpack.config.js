module.exports = {
    entry:  './src',
    output: {
        path:  __dirname + '/build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src',
            },
            {
                test:   /\.html/,
                loader: 'html-loader',
            }
        ],
    }
};