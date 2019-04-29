import loadable from '@loadable/component';

const CounterLoadable = loadable(() => import('./Counter'));

export default CounterLoadable;
