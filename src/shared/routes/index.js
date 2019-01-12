// Containers.
import App from '../containers/App';
import HomeLoadable from '../containers/Home/HomeLoadable';
import AboutLoadable from '../containers/About/AboutLoadable';
import CounterLoadable from '../containers/Counter/CounterLoadable';

// Actions.
import { counterGetDataApi } from '../actions/counter';

export const getRoutes = (store) => ({
  component: App,
  childRoutes: [
    {
      path: '/',
      component: HomeLoadable,
    },
    {
      path: '/about',
      component: AboutLoadable,
    },
    {
      path: '/counter',
      component: CounterLoadable,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(counterGetDataApi()).then(() => {
          callback();
        });
      },
    },
  ]
});
