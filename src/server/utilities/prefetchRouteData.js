import { matchPath } from 'react-router-dom';
import { reduce } from 'lodash';

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
}) => (
  reduce(routes, (result, route) => {
    const match = matchPath(path, route);
    return [
      ...result,
      ...prefetchRouteData({
        path,
        dispatch,
        routes: route.routes,
      }),
      ...(match && route.prefetch ? [route.prefetch({ dispatch, match })] : []),
    ];
  }, [])
);

export default prefetchRouteData;
