import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Redux.
import reduxConfigureStore from '../../shared/utilities/redux/reduxConfigureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

// React loadable.
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

// React router.
import { RouterContext, createMemoryHistory, match } from 'react-router';
import getRoutes from '../../shared/routes/utilities/getRoutes';

// Components.
import Template from '../components/Template';

const mainController = (assets, stats) => (req, res) => {
  const memoryHistory = createMemoryHistory(req.url);
  const store = reduxConfigureStore({}, memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({
    history,
    routes: getRoutes(store),
    location: req.url,
  }, (error, redirectLocation, renderProps) => {

    // If unexpected error occurred.
    if (error) {
      res.status(500).send(error.message);
      return;
    }

    // If we need to redirect.
    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    // If failed to match.
    if (!renderProps) {
      res.status(404).send('Not found');
      return;
    }

    const modules = [];
    const markup = renderToString(
      <Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      </Capture>
    );

    // Get code split chunks.
    const chunks = getBundles(stats, modules).filter(bundle => (
      bundle.file.endsWith('.js')
    ));

    // Grab the initial state from our Redux store.
    const state = store.getState();

    const templateMarkup = renderToStaticMarkup(
      <Template
        markup={markup}
        chunks={chunks}
        assets={assets}
        state={state}
      />
    );

    return res.status(200).send('<!doctype html>\n' + templateMarkup);
  });
};

export default mainController;
