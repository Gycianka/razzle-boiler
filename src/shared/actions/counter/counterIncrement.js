import { createAction } from 'redux-actions';

// Constants.
import { COUNTER_INCREMENT } from '../../constants/Counter';

const counterIncrement = createAction(COUNTER_INCREMENT);

export default counterIncrement;
