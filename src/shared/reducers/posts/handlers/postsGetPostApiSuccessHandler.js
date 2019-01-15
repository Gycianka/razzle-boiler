// Utilities.
import transformApiStatusSuccess from '../../../utilities/transform/api/transformApiStatusSuccess';

/**
 * Posts get post api success handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const postsGetPostApiSuccessHandler = (state, { payload }) => ({
  apiData: payload,
  status: transformApiStatusSuccess(),
});

export default postsGetPostApiSuccessHandler;
