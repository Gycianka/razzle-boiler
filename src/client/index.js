import React from 'react';
import Loadable from 'react-loadable';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { persistStore } from 'redux-persist';

// Components.
import { getRoutes } from '../shared/routes';

// Utilities.
import reduxConfigureStore from '../shared/utilities/redux/reduxConfigureStore';

// Create redux store.
const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
const store = reduxConfigureStore(initialData, browserHistory);

// Route history.
const history = syncHistoryWithStore(browserHistory, store);

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <Router
          routes={getRoutes(store)}
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
