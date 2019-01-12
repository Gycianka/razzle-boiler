import loadable from 'react-loadable';

const CounterLoadable = loadable({
  loader: () => import(/* webpackChunkName: "counter" */ './Counter'),
  loading: () => null,
});

export default CounterLoadable;
