import { createAction } from 'redux-actions';

// Constants.
import { COUNTER_DECREMENT } from '../../constants/Counter';

const counterDecrement = createAction(COUNTER_DECREMENT);

export default counterDecrement;
