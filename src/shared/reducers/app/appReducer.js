import { handleActions } from 'redux-actions';

/**
 * Initial reducer state.
 *
 * @type {Object}
 */
const initialState = {};

/**
 * Action handler.
 *
 * @type {Function}
 */
const appReducer = handleActions({}, initialState);

export default appReducer;
