import { combineReducers } from 'redux';

// Reducers.
import appReducer from './app/appReducer';
import postsReducer from './posts/postsReducer';
import counterReducer from './counter/counterReducer';
import mediaQueryReducer from './mediaQuery/mediaQueryReducer';

/**
 * Combined reducers.
 */
const reducers = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  app: appReducer,
  mediaQuery: mediaQueryReducer,
});

export default reducers;
