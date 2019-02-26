import 'isomorphic-fetch';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import { apiMiddleware } from 'redux-api-middleware';

// Reducers.
import reducers from '../../reducers';

// Utilities.
import isBrowser from '../common/isBrowser';
import reduxPersistConfig from './reduxPersist/reduxPersistConfig';

// Constants.
import { ENVIRONMENTS_DEVELOPMENT } from '../../constants/Settings';

// Middleware.
import requestMiddleware from './middleware/requestMiddleware';

/**
 * Config redux store.
 *
 * @param {Object} initialState
 *  Initial redux state.
 * @param {Object} history
 *  Route history object.
 *
 * @return {Object}
 *  Redux store.
 */
const reduxConfigureStore = (initialState = {}, history) => {
  const middleware = [
    requestMiddleware,
    apiMiddleware,
    routerMiddleware(history),
    thunkMiddleware,
  ];

  // Using redux dev tools only on dev env.
  const isDev = process.env.NODE_ENV === ENVIRONMENTS_DEVELOPMENT;

  // Add support for Redux dev tools.
  const composeEnhancers = isDev && isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    isBrowser ? persistReducer(reduxPersistConfig, reducers) : reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  // Enable Webpack hot module replacement for reducers.
  if (module.hot) {
    module.hot.accept('../../reducers', () => {
      const nextRootReducer = require('../../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default reduxConfigureStore;
