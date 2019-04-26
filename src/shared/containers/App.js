import React from 'react';

// Styles.
import '../assets/styles/App.scss';

// Components.
import RoutesWithSubRoutes from '../routes/RoutesWithSubRoutes';

// Routes.
import routes from '../routes';

const App = () => (
  <RoutesWithSubRoutes routes={routes}/>
);

export default App;
