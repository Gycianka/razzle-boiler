import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Styles.
import '../assets/styles/App.scss';

// Components.
import RoutesWithSubRoutes from '../components/routes/RoutesWithSubRoutes';
import RoutesPreloader from '../components/routes/RoutesPreloader';
import MediaQueryHandler from '../components/utilities/MediaQueryHandler';

// Routes.
import routes from '../routes';

const App = ({
  mediaQuery,
}) => (
  <div className={mediaQuery.className}>
    <MediaQueryHandler/>
    <RoutesPreloader routes={routes}>
      <RoutesWithSubRoutes routes={routes}/>
    </RoutesPreloader>
  </div>
);

App.propTypes = {
  mediaQuery: PropTypes.shape({
    className: PropTypes.string,
  }),
};

const mapStateToProps = ({ mediaQuery: { className } }) => ({
  mediaQuery: {
    className,
  },
});

export default compose(
  connect(mapStateToProps)
)(App);
