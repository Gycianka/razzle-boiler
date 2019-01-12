// Constants.
import {
  regexAnchorContactUrl,
  regexAnchorUrl,
  regexUrlAbsolute,
} from '../../constants/RegExp';

/**
 * Check if url is relative.
 *
 * @param {string} url
 *   Url address.
 *
 * @return {boolean}
 *   If url is relative.
 */
const isUrlRelative = (url) => (
  !(regexAnchorUrl.test(url) || regexAnchorContactUrl.test(url) || regexUrlAbsolute.test(url))
);

export default isUrlRelative;
