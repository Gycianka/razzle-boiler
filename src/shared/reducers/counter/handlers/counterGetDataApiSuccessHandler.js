// Utilities.
import transformApiStatusSuccess from '../../../utilities/transform/api/transformApiStatusSuccess';

/**
 * Counter get api success handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const counterGetDataApiSuccessHandler = (state, { payload }) => ({
  apiData: payload,
  status: transformApiStatusSuccess(),
});

export default counterGetDataApiSuccessHandler;
