/**
 * Set error response.
 *
 * @param {Object} res
 *  Response object.
 * @param {string} message
 *  Error message.
 */
const errorResponse = (res, message = 'Something failed!') => {
  res.status(500).send({
    error: message,
  });
};

export default errorResponse;
