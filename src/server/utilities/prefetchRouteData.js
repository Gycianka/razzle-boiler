import { matchPath } from 'react-router-dom';
import { reduce } from 'lodash';

/**
 * Prefetch router data.
 *
 * @param {string} path
 *  Request path.
 * @param {Object} store
 *  Redux store.
 * @param {Array} routes
 *  Routes.
 *
 * @return {Array}
 *  List of promises.
 */
const prefetchRouteData = ({
  path,
  store,
  routes,
}) => (
  reduce(routes, (result, route) => {
    const match = matchPath(path, route);
    return [
      ...result,
      ...prefetchRouteData({
        path,
        store,
        routes: route.routes,
      }),
      ...(match && route.prefetch ? [route.prefetch({ store, match })] : []),
    ];
  }, [])
);

export default prefetchRouteData;
