import React from 'react';
import Loadable from 'react-loadable';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { hydrate } from 'react-dom';

// Components.
import App from './shared/containers/App';

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
};

if (module.hot) {
  module.hot.accept();
}
