import React from 'react';
import { loadableReady } from '@loadable/component'
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';

// Components.
import App from '../shared/containers/App';

// Utilities.
import reduxConfigureStore from '../shared/utilities/redux/reduxConfigureStore';

// Create redux store.
const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
const store = reduxConfigureStore(initialData);
const persistor = persistStore(store);

const render = (Component) => {
  hydrate(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Component/>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};

loadableReady(() => {
  render(App)
});

if (module.hot) {
  module.hot.accept('../shared/containers/App', () => {
    render(require('../shared/containers/App').default);
  });
}
