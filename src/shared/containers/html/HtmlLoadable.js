import loadable from 'react-loadable';

const HtmlLoadable = loadable({
  loader: () => import(/* webpackChunkName: "html" */ './Html'),
  loading: () => null,
});

export default HtmlLoadable;
