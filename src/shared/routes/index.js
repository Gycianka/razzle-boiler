// Containers.
import App from '../containers/App';
import HomeLoadable from '../containers/home/HomeLoadable';
import AboutLoadable from '../containers/about/AboutLoadable';
import CounterLoadable from '../containers/counter/CounterLoadable';

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
