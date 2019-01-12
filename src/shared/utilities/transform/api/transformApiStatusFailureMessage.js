import { MESSAGE_ERROR_INTERNAL_ERROR } from '../../../constants/Messages';

/**
 * Transform api failure action status message.
 *
 * @param {Object} action
 *  Api action.
 *
 * @return {Object}
 *  Transformed api action status message.
 */
const transformApiStatusFailureMessage = (action) => {
  const { payload } = action;
  if (!payload) {
    return MESSAGE_ERROR_INTERNAL_ERROR;
  }

  const { status, response, message } = payload;
  if (status >= 500) {
    return MESSAGE_ERROR_INTERNAL_ERROR;
  }

  if (response && response.message) {
    return response.message;
  }

  return message || MESSAGE_ERROR_INTERNAL_ERROR;
};

export default transformApiStatusFailureMessage;
