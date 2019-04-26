import React from 'react';
import { Route } from 'react-router-dom';

// Utilities.
import routePropTypes from "../utilities/propTypes/routePropTypes";
import { compose } from "redux";
import { connect } from "react-redux";

class RouteWithSubRoutes extends React.PureComponent {
  renderComponent = (props) => {

    // Prefetch data if needed.
    this.props.prefetch && this.props.prefetch({
      dispatch: this.props.dispatch,
    });

    return (
      <this.props.component
        {...props}
        routes={this.props.routes}
      />
    );
  };

  render() {
    return (
      <Route
        path={this.props.path}
        exact={this.props.exact}
        render={this.renderComponent}
      />
    )
  }
}

RouteWithSubRoutes.propTypes = routePropTypes;

export default compose(
  connect(),
)(RouteWithSubRoutes);
