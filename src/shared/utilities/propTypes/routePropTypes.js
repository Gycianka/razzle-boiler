import PropTypes from 'prop-types';

const routePropTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  exact: PropTypes.bool,
  routes: PropTypes.array,
};

export default routePropTypes;
