import { mapValues } from 'lodash';

/**
 * Custom redux persis state reconciler.
 *
 * @param {Object} inboundState
 *  Inbound redux state.
 * @param {Object} originalState
 *  Original redux state.
 *
 * @return {Object}
 *  Merged redux state.
 */
const reduxPersistStateReconciler = (inboundState, originalState) => (
  mapValues(originalState, (item, key) => (
    !inboundState[key] ? item : {
      ...item,
      ...inboundState[key],
    }
  ))
);

export default reduxPersistStateReconciler;
