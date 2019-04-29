import React from 'react';
import { Route } from 'react-router-dom';

// Utilities.
import routePropTypes from '../../utilities/propTypes/routePropTypes';

class RouteWithSubRoutes extends React.PureComponent {
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

export default RouteWithSubRoutes;
