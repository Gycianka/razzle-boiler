import loadable from 'react-loadable';

const AboutLoadable = loadable({
  loader: () => import(/* webpackChunkName: "about" */ './About'),
  loading: () => null,
});

export default AboutLoadable;
