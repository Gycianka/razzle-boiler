// Containers.
import App from '../containers/App';
import HomeLoadable from '../containers/home/HomeLoadable';
import AboutLoadable from '../containers/about/AboutLoadable';
import CounterLoadable from '../containers/counter/CounterLoadable';
import HtmlLoadable from '../containers/html/HtmlLoadable';
// Actions.

import { counterGetDataApi } from '../actions/counter';

/**
 * Get routes.
 *
 * @param {Object} store
 *  Redux store.
 *
 * @return {Object}
 *  Routes.
 */
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
      path: '/html',
      component: HtmlLoadable,
    },
    {
      path: '/counter',
      component: CounterLoadable,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(counterGetDataApi()).then(() => {
          callback();
        }).catch(() => {
          callback();
        });
      },
    },
  ]
});
