import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Containers.
import App from '../containers/App';
import HomeLoadable from '../containers/Home/HomeLoadable';
import AboutLoadable from '../containers/About/AboutLoadable';
import CounterLoadable from '../containers/Counter/CounterLoadable';

const Routes = (props) => {
  return (
    <Router history={browserHistory} {...props}>
      <Route path="/" component={App}>
        <Route path="" component={HomeLoadable}/>
        <Route path="about" component={AboutLoadable}/>
        <Route path="counter" component={CounterLoadable}/>
      </Route>
    </Router>
  );
};

export default Routes;
