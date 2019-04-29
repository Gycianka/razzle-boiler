import React from 'react';
import { Link } from 'react-router-dom';

// Styles.
import '../../assets/styles/App.scss';

// Components.
import Logo from '../../components/Logo';
import Welcome from '../../components/Welcome';
import Intro from '../../components/Intro';
import MetaSite from '../../components/meta/MetaSite';
import RoutesWithSubRoutes from '../../routes/RoutesWithSubRoutes';

// Utilities.
import routesPropTypes from '../../utilities/propTypes/routesPropTypes';

const BaseWrapper = ({
  routes,
}) => (
  <div className="Home">

    <MetaSite/>

    <div className="Home-header">
      <Logo/>
      <Welcome/>
    </div>

    <Intro/>

    <ul className="Home-resources">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/html">Html</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>

    <RoutesWithSubRoutes routes={routes}/>

  </div>
);

BaseWrapper.propTypes = {
  routes: routesPropTypes,
};

export default BaseWrapper;
