import { createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reconciler.
import stateReconciler from './reduxPersistStateReconciler';

// Transforms.
import counterTransform from './transform/counterTransform';

// Constants.
import { REDUX_PERSIST_KEY } from '../../../constants/Settings';

const migrations = {
  1: (state) => ({
    ...state,
    counter: undefined,
  }),
};

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
