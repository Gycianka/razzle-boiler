import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

// Reducers.
import reducers from '../../reducers';

// Utilities.
import isBrowser from '../common/isBrowser';

// Constants.
import { ENVIRONMENTS_DEVELOPMENT } from '../../constants/Settings';

const reduxConfigureStore = (initialState = {}, history) => {
  const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
  ];

  // Using redux dev tools only on dev env.
  const isDev = process.env.NODE_ENV === ENVIRONMENTS_DEVELOPMENT;

  // Add support for Redux dev tools.
  const composeEnhancers = isDev && isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../reducers', () => {
      const nextRootReducer = require('../../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default reduxConfigureStore;
