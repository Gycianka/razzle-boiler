/**
 * Transform api request action status.
 * NOTE: Sometimes error occurs in request state (e.g. request terminated/blocker).
 *
 * @param {Object} action
 *  Api action.
 *
 * @return {Object}
 *  Transformed api action status.
 */
const transformApiStatusRequest = ({ error, payload }) => {
  const isError = error === true;
  return {
    isError,
    error: isError ? {
      name: payload.name,
      message: payload.message,
      status: payload.status,
    } : undefined,
    isFetching: !isError,
  };
};

export default transformApiStatusRequest;
