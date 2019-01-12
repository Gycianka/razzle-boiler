// Utilities.
import transformApiFailureStatusMessage from './transformApiStatusFailureMessage';

/**
 * Transform api failure action status.
 *
 * @param {Object} action
 *  Api action.
 *
 * @return {Object}
 *  Transformed api action status.
 */
const transformApiStatusFailure = (action) => ({
  isFetching: false,
  isError: true,
  error: {
    name: action.payload.name,
    status: action.payload.status,
    message: transformApiFailureStatusMessage(action),
  },
});

export default transformApiStatusFailure;
