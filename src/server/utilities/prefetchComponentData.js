import { map, reduce } from 'lodash';

/**
 * Get prefect actions.
 *
 * @param {Array<Object>} components
 *  Components data.
 *
 * @return {Array<Promise>}
 *  Prefect actions.
 */
const getPrefetchActions = (components) => (
  reduce(components, (result, component) => (
    component ? [
      ...result,
      ...(component.prefetch || []),
      ...((component.WrappedComponent && component.WrappedComponent.prefetch) || []),
    ] : result
  ), [])
);

/**
 * Prefect component data.
 *
 * @param {Object} data
 *  Render data.
 *
 * @return {Promise<any>}
 *  Component data promises.
 */
const prefetchComponentData = ({ dispatch, components, params }) => {
  const promises = map(getPrefetchActions(components), (callback) => (
    callback({
      dispatch,
      params,
    })
  ));

  return Promise.all(promises);
};

export default prefetchComponentData;
