// Utilities.
import transformApiStatusRequest from '../../../utilities/transform/api/transformApiStatusRequest';

/**
 * Counter get api request handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const counterGetDataApiRequestHandler = (state, action) => ({
  status: transformApiStatusRequest(action),
});

export default counterGetDataApiRequestHandler;
