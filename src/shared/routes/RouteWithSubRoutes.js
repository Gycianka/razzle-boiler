import React from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Utilities.
import routePropTypes from '../utilities/propTypes/routePropTypes';

class RouteWithSubRoutes extends React.PureComponent {
  componentDidMount() {

    // Prefetch data if needed.
    this.props.prefetch && this.props.prefetch({
      dispatch: this.props.dispatch,
    });
  }

  renderComponent = (props) => (
    <this.props.component
      {...props}
      routes={this.props.routes}
    />
  );

  render() {
    return (
      <Route
        path={this.props.path}
        exact={this.props.exact}
        render={this.renderComponent}
      />
    );
  }
}

RouteWithSubRoutes.propTypes = routePropTypes;

export default compose(
  connect(), // We just need dispatch in props.
)(RouteWithSubRoutes);
