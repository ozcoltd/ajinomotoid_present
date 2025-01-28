module.exports = {
    mode: 'production',
    entry: {
        common: './src/assets/js/common.js',
        top: './src/assets/js/top.js',
    },
    output: {
        filename: '[name].js',
    },
    optimization: {
        minimize: false,
    }
}