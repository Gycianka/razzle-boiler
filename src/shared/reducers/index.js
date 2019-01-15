import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import counterReducer from './counter/counterReducer';
import postsReducer from './posts/postsReducer';

/**
 * Combined reducers.
 *
 * @type {Reducer<any>}
 */
const reducers = combineReducers({
  counter: counterReducer,
  routing: routerReducer,
  posts: postsReducer,
});

export default reducers;
