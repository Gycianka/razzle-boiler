const paths = require('razzle/config/paths');

// Other plugins.
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Post CSS plugins.
const autoprefixer = require('autoprefixer');
const postCssInlineSvg = require('postcss-inline-svg');
const postCssFlexBugFixes = require('postcss-flexbugs-fixes');
const postCssCalc = require('postcss-calc');

const DEV_ANALYZE = false;

module.exports = {
  plugins: [
    {
      name: 'scss',
      options: {
        postcss: {
          plugins: [
            postCssFlexBugFixes,
            autoprefixer({
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

    // Add react loadable support.
    if (isWeb) {
      appConfig.plugins.push(
        new ReactLoadablePlugin({
          filename: './build/react-loadable.json',
        })
      );
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
