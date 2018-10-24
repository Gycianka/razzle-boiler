import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';

// Components.
import Routes from './shared/routes/';

// Utilities.
import reduxConfigureStore from './shared/utilities/redux/reduxConfigureStore';

// Create redux store.
const store = reduxConfigureStore(window.__INITIAL_STATE__);

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <Routes/>
      </Provider>,
      document.getElementById('root')
    );
  });
};

if (module.hot) {
  module.hot.accept('./shared/routes/index', () => {
    window.main();
  });
}
