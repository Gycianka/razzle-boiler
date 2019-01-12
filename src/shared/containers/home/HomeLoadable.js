import loadable from 'react-loadable';

const HomeLoadable = loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: () => null,
});

export default HomeLoadable;
