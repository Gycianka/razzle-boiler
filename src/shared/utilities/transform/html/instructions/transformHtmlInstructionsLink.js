/* eslint-disable react/display-name */

import React from 'react';

// Components.
import LinkProxy from '../../../../components/common/LinkProxy';

// Constants.
import {
  HTML_TYPE_TAG,
  HTML_TAG_NAME_ANCHOR,
} from '../../../../constants/Html';

/**
 * Get anchor tag transform instructions.
 *
 * @return {Object}
 *  Anchor tag transform instructions.
 */
const transformHtmlInstructionsLink = () => ({
  shouldProcessNode: (node) => (
    node.type === HTML_TYPE_TAG && node.name === HTML_TAG_NAME_ANCHOR &&
    node.attribs && node.attribs.href && node.children
  ),
  processNode: (node, children) => (
    <LinkProxy {...(node.attribs || {})}>
      {children}
    </LinkProxy>
  ),
});

export default transformHtmlInstructionsLink;
