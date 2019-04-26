import React from 'react';
import path from 'path';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Redux.
import reduxConfigureStore from '../../shared/utilities/redux/reduxConfigureStore';
import { Provider } from 'react-redux';

// Loadable.
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'

// React router.
import routes from '../../shared/routes';
import { StaticRouter } from 'react-router-dom';

// Components.
import App from '../../shared/containers/App';
import Template from '../components/Template';

// Utilities.
import getBaseUrl from '../utilities/getBaseUrl';
import prefetchRouteData from '../utilities/prefetchRouteData';

const mainController = ({
  assets,
  settings,
}) => (req, res) => {

  const initialState = {
    app: {
      ...settings,
      hostname: getBaseUrl(req),
    },
  };

  // Redux store.
  const store = reduxConfigureStore(initialState);

  // Get all prefetch promises.
  const promises = prefetchRouteData({
    routes,
    path: req.path,
    dispatch: store.dispatch,
  });

  // Wait for them to finish first.
  Promise.all(promises).then(() => {

    // Loadable extractor.
    const extractor = new ChunkExtractor({
      statsFile: path.resolve('build/loadable-stats.json'),
      entrypoints: ['client'],
    });

    const context = {};
    const markup = renderToString(
      <ChunkExtractorManager extractor={extractor}>
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <App/>
          </StaticRouter>
        </Provider>
      </ChunkExtractorManager>
    );

    // Redirects.
    if (context.url) {
      return res.redirect(301, context.url);
    }

    // Grab the initial state from our Redux store.
    const state = store.getState();

    const templateMarkup = renderToStaticMarkup(
      <Template
        markup={markup}
        state={state}
        extractor={extractor}
      />
    );

    res.status(context.statusCode || 200).send('<!doctype html>\n' + templateMarkup);
  });
};

export default mainController;
