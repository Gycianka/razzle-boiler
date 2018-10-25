import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { hydrate } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { persistStore } from 'redux-persist';

// Components.
import Routes from '../shared/routes';

// Utilities.
import reduxConfigureStore from '../shared/utilities/redux/reduxConfigureStore';

// Create redux store.
const store = reduxConfigureStore(window.__INITIAL_STATE__, browserHistory);

// Route history.
const history = syncHistoryWithStore(browserHistory, store);

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <Routes
          history={history}
        />
      </Provider>,
      document.getElementById('root'),
      () => {
        // Only persist state when page is fully hydrated.
        persistStore(store);
      }
    );
  });
};

if (module.hot) {
  module.hot.accept('../shared/routes', () => {
    window.main();
  });
}
