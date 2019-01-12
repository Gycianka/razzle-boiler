// Utilities.
import transformApiStatusFailure from '../../../utilities/transform/api/transformApiStatusFailure';

/**
 * Counter get api failure handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const counterGetDataApiFailureHandler = (state, action) => ({
  status: transformApiStatusFailure(action),
});

export default counterGetDataApiFailureHandler;
