const ImageminPlugin = require('imagemin-webpack-plugin').default;
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const Dotenv = require('dotenv-webpack');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.plugins.push(new Dotenv())
  config.plugins.push(
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 3
      },
      pngquant: {
        quality: '65-90',
        speed: 4
      },
      svgo: {
        removeUnknownsAndDefaults: false,
        cleanupIDs: false
      },
      gifsicle: {
        optimizationLevel: 1
      },
      jpegtran: {
        progressive: true
      }
    })
  )
  return config;
};
