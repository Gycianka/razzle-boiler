import { reduce } from 'lodash';
import { matchPath } from 'react-router-dom';

// Utilities.
import isBrowser from '../../common/isBrowser';

/**
 * Prefetch router data.
 *
 * @param {string} path
 *  Request path.
 * @param {function} dispatch
 *  Store dispatch function.
 * @param {Array} routes
 *  Routes.
 *
 * @return {Array}
 *  List of promises.
 */
const prefetchRouteData = ({
  path,
  dispatch,
  routes,
}) => {
  let match = false;
  return reduce(routes, (result, route) => {

    // To simulate "switch" behavior.
    if (match) {
      return result;
    }

    match = matchPath(path, route);
    return [
      ...result,
      ...prefetchRouteData({
        path,
        dispatch,
        routes: route.routes,
      }),
      ...(match && route.prefetch ? [route.prefetch({ dispatch, match })] : []),
      ...(match && route.isLoadable && isBrowser ? [route.component.preload()] : [])
    ];
  }, []);
};

export default prefetchRouteData;
