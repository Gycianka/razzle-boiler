import { KEY_PREFIX, REHYDRATE } from 'redux-persist';
import { mapValues } from 'lodash';

// Constants.
import { REDUX_PERSIST_KEY } from '../../../constants/Settings';

const reduxPersistCrossTabSync = (store) => {
  const handleStorageEvent = (event) => {

    // IE.
    const realEvent = event || window.event;

    // If key is not from redux-persist.
    const { key } = realEvent;
    if (!key.startsWith(KEY_PREFIX)) {
      return;
    }

    // Nothing changes.
    if (realEvent.oldValue === realEvent.newValue) {
      return;
    }

    store.dispatch({
      type: REHYDRATE,
      key: REDUX_PERSIST_KEY,
      payload: mapValues(JSON.parse(realEvent.newValue), (item) => (
        JSON.parse(item)
      )),
    });
  };

  window.addEventListener('storage', handleStorageEvent, false);
};

export default reduxPersistCrossTabSync;
