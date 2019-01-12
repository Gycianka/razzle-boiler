import { handleActions } from 'redux-actions';

// Utilities.
import counterIncrementHandler from './handlers/counterIncrementHandler';
import counterDecrementHandler from './handlers/counterDecrementHandler';
import counterGetDataApiRequestHandler from './handlers/counterGetDataApiRequestHandler';
import counterGetDataApiSuccessHandler from './handlers/counterGetDataApiSuccessHandler';
import counterGetDataApiFailureHandler from './handlers/counterGetDataApiFailureHandler';

// Constants.
import transformApiInitialStatus from '../../utilities/transform/api/transformApiInitialStatus';
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_GET_DATA_API_REQUEST,
  COUNTER_GET_DATA_API_SUCCESS,
  COUNTER_GET_DATA_API_FAILURE,
} from '../../constants/Counter';

const initialState = {
  status: transformApiInitialStatus,
  count: 1,
};

const counterReducer = handleActions({
  [COUNTER_INCREMENT]: (state) => ({
    ...state,
    ...counterIncrementHandler(state),
  }),
  [COUNTER_DECREMENT]: (state) => ({
    ...state,
    ...counterDecrementHandler(state),
  }),
  [COUNTER_GET_DATA_API_REQUEST]: (state, action) => ({
    ...state,
    ...counterGetDataApiRequestHandler(state, action),
  }),
  [COUNTER_GET_DATA_API_SUCCESS]: (state, action) => ({
    ...state,
    ...counterGetDataApiSuccessHandler(state, action),
  }),
  [COUNTER_GET_DATA_API_FAILURE]: (state, action) => ({
    ...state,
    ...counterGetDataApiFailureHandler(state, action),
  }),
}, initialState);

export default counterReducer;
