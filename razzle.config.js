const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  modify: (config, { target }) => {
    if (target !== 'web') {
      return config;
    }

    return {
      ...config,
      plugins: [
        ...config.plugins,
        new ReactLoadablePlugin({
          filename: './build/react-loadable.json',
        }),
      ],
    };
  },
};
