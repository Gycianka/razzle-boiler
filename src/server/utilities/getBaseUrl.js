import url from 'url';

/**
 * Get request base url.
 *
 * @param {Object} req
 *  Request object.
 *
 * @return {string}
 *  Request base url.
 */
const getBaseUrl = (req) => (
  url.format({
    protocol: req.protocol,
    host: req.get('host'),
  })
);

export default getBaseUrl;
