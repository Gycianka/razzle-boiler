import loadable from '@loadable/component';

const PostsLoadable = loadable(() => import('./Posts'));

export default PostsLoadable;
