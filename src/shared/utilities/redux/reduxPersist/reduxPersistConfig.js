import { createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reconciler.
import stateReconciler from './reduxPersistStateReconciler';

// Transforms.
import counterTransform from './transform/counterTransform';

// Constants.
import { REDUX_PERSIST_KEY } from '../../../constants/Settings';

/**
 * Redux persist migration instructions by app version.
 *
 * @type {Object}
 */
const migrations = {
  1: (state) => ({
    ...state,
    counter: undefined,
  }),
};

/**
 * Redux persist configs.
 *
 * @type {Object}
 */
const reduxPersistConfig = {
  version: 1,
  key: REDUX_PERSIST_KEY,
  storage,
  stateReconciler,
  migrate: createMigrate(migrations, { debug: false }),
  transforms: [
    counterTransform,
  ],
  whitelist: [
    'counter',
  ],
};

export default reduxPersistConfig;
