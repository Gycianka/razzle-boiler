import React from 'react';
import { map } from 'lodash';

// Components.
import RouteWithSubRoutes from './RouteWithSubRoutes';

// Utilities.
import routesPropTypes from '../../utilities/propTypes/routesPropTypes';

const RoutesWithSubRoutes = ({ routes }) => (
  <React.Fragment>
    {map(routes, (item, index) => (
      <RouteWithSubRoutes key={index} {...item} />
    ))}
  </React.Fragment>
);

RoutesWithSubRoutes.propTypes = {
  routes: routesPropTypes,
};

export default RoutesWithSubRoutes;
