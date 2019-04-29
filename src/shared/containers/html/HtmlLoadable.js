// Utilities.
import loadable from '../../utilities/helpers/loadable/getLoadableComponent';

const HtmlLoadable = loadable(() => import('./Html'));

export default HtmlLoadable;
