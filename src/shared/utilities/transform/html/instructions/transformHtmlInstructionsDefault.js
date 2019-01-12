import { pick } from 'lodash';

// Constants.
import { HTML_ATTRIBUTES_WHITELIST } from '../../../../constants/Html';

/**
 * Get default html transform instructions.
 *
 * @param {Function} processor
 *  Process node definitions.
 *
 * @return {Object}
 *  Default html transform instructions.
 */
const transformHtmlInstructionsDefault = (processor) => ({
  shouldProcessNode: () => (true),
  processNode: (node, children, index) => (
    processor({
      ...node,
      ...(node.attribs ? {
        attribs: pick(node.attribs, HTML_ATTRIBUTES_WHITELIST),
      } : {}),
    }, children, index)
  ),
});

export default transformHtmlInstructionsDefault;
