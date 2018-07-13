import React from 'react';
import { Route, Switch } from 'react-router-dom';

// CSS.
import '../assets/styles/App.css';

// Containers.
import Main from './Main';

const App = () => (
  <Switch>
    <Route exact path="/*" component={Main}/>
  </Switch>
);

export default App;
