import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import counterReducer from './counter/counterReducer';

/**
 * Combined reducers.
 *
 * @type {Reducer<any>}
 */
const reducers = combineReducers({
  counter: counterReducer,
  routing: routerReducer,
});

export default reducers;
