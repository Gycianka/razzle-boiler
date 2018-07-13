import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';

// Reducers.
import RootReducer from '../../reducers/RootReducer';

// Utilities.
import isBrowser from '../common/isBrowser';
import reduxPersistConfig from './reduxPersist/reduxPersistConfig';

// Constants.
import { ENVIRONMENTS_DEVELOPMENT } from '../../constants/Settings';

const reduxConfigureStore = (initialState = {}) => {
  const middleware = [
    thunkMiddleware,
  ];

  // Using redux dev tools only on dev env.
  const isDev = process.env.NODE_ENV === ENVIRONMENTS_DEVELOPMENT;

  // Add support for Redux dev tools.
  const composeEnhancers = isDev && isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  return createStore(
    persistReducer(reduxPersistConfig, RootReducer),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
};

export default reduxConfigureStore;