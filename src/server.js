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
import { StaticRouter } from 'react-router-dom';

// Components.
import App from './shared/containers/App';
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
  const context = {};
  const modules = [];

  const store = reduxConfigureStore();

  const markup = renderToString(
    <Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App/>
        </StaticRouter>
      </Provider>
    </Capture>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {

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
  }
});

export default server;
