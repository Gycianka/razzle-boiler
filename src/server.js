import React from 'react';
import { Provider } from 'react-redux';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

// Server.
import express from 'express';
import compression from 'compression';

// React loadable.
import stats from '../build/react-loadable.json';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

// React router.
import getRoutes from './shared/routes';
import { RouterContext, createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Components.
import Template from './server/components/Template';

// Utilities.
import reduxConfigureStore from './shared/utilities/redux/reduxConfigureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.disable('x-powered-by');

server.use(compression());
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR, {
  maxAge: '30d',
}));

server.get('/*', (req, res) => {
  const memoryHistory = createMemoryHistory(req.url);
  const store = reduxConfigureStore({}, memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({
    history,
    routes: getRoutes(),
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

    const templateMarkup = renderToStaticMarkup(
      Template({
        assets,
        chunks,
        markup,
      })
    );

    return res.status(200).send('<!doctype html>\n' + templateMarkup);
  });
});

export default server;
