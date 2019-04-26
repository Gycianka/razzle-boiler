import { combineReducers } from 'redux';

// Reducers.
import counterReducer from './counter/counterReducer';
import postsReducer from './posts/postsReducer';
import appReducer from './app/appReducer';

/**
 * Combined reducers.
 */
const reducers = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  app: appReducer,
});

export default reducers;
