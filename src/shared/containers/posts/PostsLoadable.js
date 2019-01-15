import loadable from 'react-loadable';

const PostsLoadable = loadable({
  loader: () => import(/* webpackChunkName: "posts" */ './Posts'),
  loading: () => null,
});

export default PostsLoadable;
