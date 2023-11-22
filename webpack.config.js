const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    console.log(config.rules);
    // Customize the config before returning it.

    // Ignore source maps in node_modules
    // Idea from: https://stackoverflow.com/questions/63195843/webpack-module-warning-failed-to-parse-source-map-from-data-url
    // Issue: https://github.com/akveo/react-native-ui-kitten/issues/1745
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

    return config;
};
