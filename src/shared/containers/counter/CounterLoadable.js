// Utilities.
import loadable from '../../utilities/helpers/loadable/getLoadableComponent';

const CounterLoadable = loadable(() => import('./Counter'));

export default CounterLoadable;
