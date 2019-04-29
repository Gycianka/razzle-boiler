import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

// Utilities.
import routesPropTypes from '../../utilities/propTypes/routesPropTypes';
import prefetchRouteData from '../../utilities/helpers/routes/prefetchRouteData';

class RoutesPreloader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      previousLocation: props.location,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location === this.props.location) {
      return;
    }

    // If pathname changes we have to dispatch actions.
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.onLocationChange();
      return;
    }

    // Otherwise update location with new params and stuff.
    this.setPreviousLocation(this.props.location);
  }

  onLocationChange = () => {
    const { location } = this.props;
    const promises = prefetchRouteData({
      path: location.pathname,
      routes: this.props.routes,
      dispatch: this.props.dispatch,
    });

    // Wait for them to finish first.
    Promise.all(promises).then(() => {

      // If location changed again before finishing.
      if (this.props.location !== location) {
        return;
      }

      this.setPreviousLocation(location);
    });
  };

  setPreviousLocation = (value) => {
    this.setState({
      previousLocation: value,
    });
  };

  renderChildren = () => (
    this.props.children
  );

  render() {
    return (
      <Route
        location={this.state.previousLocation}
        render={this.renderChildren}
      />
    );
  }
}

RoutesPreloader.propTypes = {
  routes: routesPropTypes,
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  connect(), // We just need dispatch in props.
)(RoutesPreloader);
