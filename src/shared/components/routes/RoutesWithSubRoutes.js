import React from 'react';
import { Switch } from 'react-router-dom';
import { map } from 'lodash';

// Components.
import RouteWithSubRoutes from './RouteWithSubRoutes';

// Utilities.
import routesPropTypes from '../../utilities/propTypes/routesPropTypes';

const RoutesWithSubRoutes = ({ routes }) => (
  <Switch>
    {map(routes, (item, index) => (
      <RouteWithSubRoutes key={index} {...item} />
    ))}
  </Switch>
);

RoutesWithSubRoutes.propTypes = {
  routes: routesPropTypes,
};

export default RoutesWithSubRoutes;
