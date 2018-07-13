import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// CSS.
import '../assets/styles/Main.css';

// Containers.
import HomeLoadable from './Home/HomeLoadable';
import AboutLoadable from './About/AboutLoadable';
import CounterLoadable from './Counter/CounterLoadable';

// Components.
import Logo from '../components/Logo';
import Welcome from '../components/Welcome';
import Intro from '../components/Intro';

const Main = () => (
  <div className="Home">

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
    </ul>

    <Switch>
      <Route exact path="/" component={HomeLoadable}/>
      <Route path="/about" component={AboutLoadable}/>
      <Route path="/counter" component={CounterLoadable}/>
    </Switch>

  </div>
);

export default Main;
