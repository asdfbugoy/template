// const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function override(config, env) {
    console.log(env);
    //do stuff with the webpack config...
    // config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
    //     maxChunks: 5
    // }))
    // config.externals = {
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //     'react-dom/server': 'ReactDOMServer',
    //     // '@material-ui/core': 'material-ui/core'
    //     // 'material-ui/core': /@material-ui\/core\/.*/,
    //     // 'material-ui/lab': 'MaterialUiLab',
    //     //'react/lib/ReactTransitionGroup': 'React.addons.TransitionGroup',
    //     //'react/lib/ReactCSSTransitionGroup': 'React.addons.CSSTransitionGroup'
    // }

    config.optimization.splitChunks = {
        // chunks: 'all',
        // name: false,
        cacheGroups: {
            css: {
                name: 'all',
                test: /\.css$/,
                // chunks: 'all',
                enforce: true
            },
            js: {
                name: 'all',
                test: /\.js$/,
                // chunks: 'all',
                enforce: true
            }
        }
    };
    config.optimization.runtimeChunk = false;

    // For AppDevelopment

    // if (env === 'production') {
    //     config.output.filename = 'development/js/[name].[contenthash:8].js';
    //     config.output.chunkFilename = 'development/js/[name].[contenthash:8].chunk.js';

    //     config.plugins = config.plugins.map((d, i) => i == 5 ? new MiniCssExtractPlugin({
    //         filename: 'development/css/[name].[contenthash:8].css',
    //         chunkFilename: 'development/css/[name].[contenthash:8].chunk.css',
    //     }) : d);
    // }

    return config;
};