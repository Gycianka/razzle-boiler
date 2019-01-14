/**
 * Check if windows object is defined.
 *
 * @type {boolean}
 */
const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default isBrowser;
