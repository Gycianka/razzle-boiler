const paths = require('razzle/config/paths');

// Other plugins.
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LoadablePlugin = require('@loadable/webpack-plugin');

// Post CSS plugins.
const autoPreFixer = require('autoprefixer');
const postCssInlineSvg = require('postcss-inline-svg');
const postCssFlexBugFixes = require('postcss-flexbugs-fixes');
const postCssCalc = require('postcss-calc');

const DEV_ANALYZE = false;

module.exports = {
  plugins: ['eslint',
    {
      name: 'scss',
      options: {
        postcss: {
          plugins: [
            postCssFlexBugFixes,
            autoPreFixer({
              browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
              flexbox: 'no-2009',
            }),
            postCssCalc,
            postCssInlineSvg({
              path: paths.appSrc + '/shared/assets/svg',
            }),
          ],
        },
      },
    },
  ],
  modify: (config, { target, dev }) => {
    const isWeb = target === 'web';
    const appConfig = Object.assign({}, config);

    // Style lint.
    if (isWeb) {
      appConfig.plugins.push(
        new StyleLintPlugin({
          context: paths.appSrc + '/shared/assets/styles',
          cache: true,
        })
      );
    }

    // Add loadable support.
    if (isWeb) {
      appConfig.plugins.push(
        new LoadablePlugin({
          outputAsset: false,
          writeToDisk: {
            filename: paths.appBuild,
          },
        })
      );

      // Chunk names.
      appConfig.output.filename = dev ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].js';

      // Optimizations for dev env.
      appConfig.optimization = Object.assign({}, appConfig.optimization, {
        runtimeChunk: true,
        splitChunks: {
          chunks: 'all',
          name: dev,
        },
      });
    }

    // Add bundle analyzer.
    if (DEV_ANALYZE && isWeb && !dev) {
      appConfig.plugins.push(
        new BundleAnalyzerPlugin()
      );
    }

    return appConfig;
  },
};
