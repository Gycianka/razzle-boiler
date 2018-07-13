import { combineReducers } from 'redux';

// Reducers.
import CounterReducer from './counter/CounterReducer';

const RootReducer = combineReducers({
  counter: CounterReducer,
});

export default RootReducer;
