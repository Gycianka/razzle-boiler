import React from 'react';
import Loadable from 'react-loadable';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';

// Components.
import Routes from '../shared/routes/Routes';

// Utilities.
import reduxConfigureStore from '../shared/utilities/redux/reduxConfigureStore';

// Create redux store.
const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
const store = reduxConfigureStore(initialData, browserHistory);
const persistor = persistStore(store);

window.main = () => {
  render(Routes);
};

if (module.hot) {
  module.hot.accept('../shared/routes/Routes', () => {
    const newRoutes = require('../shared/routes/Routes').default;
    render(newRoutes);
  });
}

const render = (RoutesComponent) => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RoutesComponent store={store}/>
        </PersistGate>
      </Provider>,
      document.getElementById('root')
    );
  });
};
