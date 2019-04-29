// Utilities.
import loadable from '../../utilities/helpers/loadable/getLoadableComponent';

const HomeLoadable = loadable(() => import('./Home'));

export default HomeLoadable;
