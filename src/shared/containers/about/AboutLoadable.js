// Utilities.
import loadable from '../../utilities/helpers/loadable/getLoadableComponent';

const AboutLoadable = loadable(() => import('./About'));

export default AboutLoadable;
