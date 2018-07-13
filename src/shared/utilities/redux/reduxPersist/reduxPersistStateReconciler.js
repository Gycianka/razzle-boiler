import { mapValues } from 'lodash';

const reduxPersistStateReconciler = (inboundState, originalState) => (
  mapValues(originalState, (item, key) => (
    !inboundState[key] ? item : {
      ...item,
      ...inboundState[key],
    }
  ))
);

export default reduxPersistStateReconciler;
