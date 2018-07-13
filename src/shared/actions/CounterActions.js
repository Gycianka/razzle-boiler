import { createAction } from 'redux-actions';

// Constants.
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from '../constants/CounterReducerActions';

export const counterIncrement = createAction(COUNTER_INCREMENT);
export const counterDecrement = createAction(COUNTER_DECREMENT);
