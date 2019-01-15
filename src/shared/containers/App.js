import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// CSS.
import '../assets/styles/App.css';

// Components.
import Logo from '../components/Logo';
import Welcome from '../components/Welcome';
import Intro from '../components/Intro';
import MetaSite from '../components/meta/MetaSite';

const App = ({
  children,
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

    {children}

  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
