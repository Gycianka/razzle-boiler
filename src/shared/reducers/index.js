import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import counterReducer from './counter/counterReducer';
import postsReducer from './posts/postsReducer';
import appReducer from './app/appReducer';

/**
 * Combined reducers.
 *
 * @type {Reducer<any>}
 */
const reducers = combineReducers({
  counter: counterReducer,
  routing: routerReducer,
  posts: postsReducer,
  app: appReducer,
});

export default reducers;
