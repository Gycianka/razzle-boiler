import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { persistStore } from 'redux-persist';

// Components.
import App from './shared/containers/App';

// Utilities.
import reduxConfigureStore from './shared/utilities/redux/reduxConfigureStore';
import reduxPersistCrossTabSync from './shared/utilities/redux/reduxPersist/reduxPersistCrossTabSync';

// Create redux store.
const store = reduxConfigureStore(window.__INITIAL_STATE__);

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      document.getElementById('root'),
      () => {
        // Only persist state when page is fully hydrated.
        persistStore(store, null, () => {
          // Sync tabs.
          reduxPersistCrossTabSync(store);
        });
      }
    );
  });
};

if (module.hot) {
  module.hot.accept();
}
