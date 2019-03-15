import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Redux.
import reduxConfigureStore from '../../shared/utilities/redux/reduxConfigureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

// React loadable.
import stats from '../../../build/react-loadable.json';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

// React router.
import getRoutes from '../../shared/routes/utilities/getRoutes';
import { RouterContext, createMemoryHistory, match } from 'react-router';

// Components.
import Template from '../components/Template';

// Utilities.
import errorResponse from '../utilities/errorResponse';
import getBaseUrl from '../utilities/getBaseUrl';
import prefetchComponentData from '../utilities/prefetchComponentData';

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
  const memoryHistory = createMemoryHistory(req.url);
  const store = reduxConfigureStore(initialState, memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({
    history,
    routes: getRoutes(store),
    location: req.url,
  }, (error, redirectLocation, renderProps) => {

    // If unexpected error occurred.
    if (error) {
      errorResponse(res, error.message);
      return;
    }

    // If we need to redirect.
    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    // If failed to match.
    if (!renderProps) {
      errorResponse(res, 'Missing props in match rendering.');
      return;
    }

    prefetchComponentData({
      dispatch: store.dispatch,
      components: renderProps.components,
      params: renderProps.params,
    }).then(() => {

      const modules = [];
      const markup = renderToString(
        <Capture report={moduleName => modules.push(moduleName)}>
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        </Capture>
      );

      // Get code split chunks.
      const bundles = getBundles(stats, modules);
      const scriptChunks = bundles.filter(bundle => bundle.file.endsWith('.js'));
      const stylesChunks = bundles.filter(bundle => bundle.file.endsWith('.css'));

      // Grab the initial state from our Redux store.
      const state = store.getState();

      const templateMarkup = renderToStaticMarkup(
        <Template
          markup={markup}
          assets={assets}
          state={state}
          scriptChunks={scriptChunks}
          stylesChunks={stylesChunks}
        />
      );

      res.send('<!doctype html>\n' + templateMarkup);
    }).catch((error) => {
      errorResponse(res, error.message);
    });
  });
};

export default mainController;
