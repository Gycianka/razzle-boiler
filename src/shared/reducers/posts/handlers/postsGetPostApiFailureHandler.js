// Utilities.
import transformApiStatusFailure from '../../../utilities/transform/api/transformApiStatusFailure';

/**
 * Posts get post api failure handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const postsGetPostApiFailureHandler = (state, action) => ({
  status: transformApiStatusFailure(action),
});

export default postsGetPostApiFailureHandler;
