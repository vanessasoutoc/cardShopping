const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const path = require('path')

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    if (!config.ignoreWarnings) {
        config.ignoreWarnings = []
    }
    if (!config.module.rules) {
        config.module.rules = [];
    }
    /* config.entry = './index.tsx' */
    config.ignoreWarnings.push(/Failed to parse source map/)
    /* config.resolve = {
        extensions: ['.tsx', '.ts', '.js'],
    } */
    /* config.resolve.alias['../Utilities/Platform'] =
    'react-native-web/dist/exports/Platform' */
    config.module.rules.push(
        {
            test: /\.tsx$/,
            enforce: 'pre',
            use: ['source-map-loader'],
        },
        {
            test: /\.tsx$/,
            enforce: 'post',
            use: {
                loader: WebpackObfuscator.loader,
                options: {
                    rotateStringArray: true
                }
            }
        },
        /* {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, */
    );
    config.optimization = {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
    /* config.output = {
        filename: 'index.js',
        path: path.resolve(__dirname, 'web-build'),
    } */

    return config;
};
