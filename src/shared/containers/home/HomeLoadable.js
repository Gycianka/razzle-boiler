import loadable from '@loadable/component'

const HomeLoadable = loadable(() => import('./Home'));

export default HomeLoadable;
