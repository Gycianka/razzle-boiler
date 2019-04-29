import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Styles.
import '../assets/styles/App.scss';

// Components.
import RoutesWithSubRoutes from '../routes/RoutesWithSubRoutes';
import MediaQueryHandler from '../components/utilities/MediaQueryHandler';

// Routes.
import routes from '../routes';

const App = () => (
  <div>
    <MediaQueryHandler/>
    <RoutesWithSubRoutes routes={routes}/>
  </div>
);

const mapStateToProps = ({ mediaQuery: { className } }) => ({
  mediaQuery: {
    className,
  },
});

export default compose(
  connect(mapStateToProps)
)(App);
