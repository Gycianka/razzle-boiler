import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';

// Components.
import App from './shared/containers/App';

// Utilities.
import reduxConfigureStore from './shared/utilities/redux/reduxConfigureStore';

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
      document.getElementById('root')
    );
  });
};

if (module.hot) {
  module.hot.accept();
}
