// Containers.
import App from '../../containers/App';
import HomeLoadable from '../../containers/home/HomeLoadable';
import AboutLoadable from '../../containers/about/AboutLoadable';
import CounterLoadable from '../../containers/counter/CounterLoadable';
import HtmlLoadable from '../../containers/html/HtmlLoadable';
import PostsLoadable from '../../containers/posts/PostsLoadable';

// Actions.
import postsGetPostsApi from '../../actions/posts/postsGetPostsApi';

/**
 * Get routes.
 *
 * @param {Object} store
 *  Redux store.
 *
 * @return {Object}
 *  Routes.
 */
const getRoutes = (store) => ({
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
      path: '/posts',
      component: PostsLoadable,
      onEnter: (nextState, replace, callback) => {
        store.dispatch(postsGetPostsApi()).then(() => {
          callback();
        }).catch(() => {
          callback();
        });
      },
    },
    {
      path: '/counter',
      component: CounterLoadable,
    },
  ]
});

export default getRoutes;
