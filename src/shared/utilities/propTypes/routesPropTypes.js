import PropTypes from 'prop-types';

// Utilities.
import routePropTypes from './routePropTypes';

const routesPropTypes = PropTypes.arrayOf(
  PropTypes.shape(routePropTypes)
);

export default routesPropTypes;
