// Utilities.
import transformApiStatusRequest from '../../../utilities/transform/api/transformApiStatusRequest';

/**
 * Posts get post api request handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const postsGetPostApiRequestHandler = (state, action) => ({
  status: transformApiStatusRequest(action),
});

export default postsGetPostApiRequestHandler;
