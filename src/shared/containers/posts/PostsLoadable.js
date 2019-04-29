// Utilities.
import loadable from '../../utilities/helpers/loadable/getLoadableComponent';

const PostsLoadable = loadable(() => import('./Posts'));

export default PostsLoadable;
