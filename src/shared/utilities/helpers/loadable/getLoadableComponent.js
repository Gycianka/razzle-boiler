import loadable from '@loadable/component';

/**
 * Get loadable component with default options and preload as promise.
 *
 * @param {function} loader
 *  Component loader.
 * @param {Object} options
 *  Loadable options.
 *
 * @return {Object}
 *  Loadable component.
 */
const getLoadableComponent = (loader, options = {}) => {
  const Component = loadable(loader, options);

  Component.preload = loader.requireAsync || loader;

  return Component;
};

export default getLoadableComponent;
