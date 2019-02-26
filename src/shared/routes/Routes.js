import React from 'react';
import PropTypes from 'prop-types';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Routes.
import getRoutes from './utilities/getRoutes';

const Routes = ({
  store,
}) => {
  const history = syncHistoryWithStore(browserHistory, store);
  const routes = getRoutes(store);
  return (
    <Router
      history={history}
      routes={routes}
    />
  );
};

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
