import loadable from '@loadable/component'

const HtmlLoadable = loadable(() => import('./Html'));

export default HtmlLoadable;
