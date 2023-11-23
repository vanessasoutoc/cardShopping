const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    if (!config.ignoreWarnings) {
        config.ignoreWarnings = []
    }
    if (!config.module.rules) {
        config.module.rules = [];
    }

    config.ignoreWarnings.push(/Failed to parse source map/)
    config.module.rules.push(
        {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
        },
    );
    config.optimization = {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }

    return config;
};
