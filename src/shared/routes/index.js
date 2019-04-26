// Components.
import BaseWrapper from '../containers/wrappers/BaseWrapper';
import HomeLoadable from '../containers/home/HomeLoadable';
import AboutLoadable from '../containers/about/AboutLoadable';
import CounterLoadable from '../containers/counter/CounterLoadable';
import HtmlLoadable from '../containers/html/HtmlLoadable';
import PostsLoadable from '../containers/posts/PostsLoadable';

// Actions.
import postsGetPostsApi from '../actions/posts/postsGetPostsApi';

const routes = [
  {
    path: '/*',
    component: BaseWrapper,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomeLoadable,
      },
      {
        path: '/about',
        exact: true,
        component: AboutLoadable,
      },
      {
        path: '/counter',
        exact: true,
        component: CounterLoadable,
      },
      {
        path: '/html',
        exact: true,
        component: HtmlLoadable,
      },
      {
        path: '/posts',
        exact: true,
        component: PostsLoadable,
        prefetch: ({ dispatch }) => (
          dispatch(postsGetPostsApi())
        ),
      },
    ]
  }
];

export default routes;
