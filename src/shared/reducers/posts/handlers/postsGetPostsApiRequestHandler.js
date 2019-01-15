// Utilities.
import transformApiStatusRequest from '../../../utilities/transform/api/transformApiStatusRequest';

/**
 * Posts get posts api request handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const postsGetPostsApiRequestHandler = (state, action) => ({
  status: transformApiStatusRequest(action),
});

export default postsGetPostsApiRequestHandler;
