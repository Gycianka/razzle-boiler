import React from 'react';
import { Parser } from 'html-to-react';

// Utilities.
import isNodeValid from './utilities/isNodeValid';
import transformHtmlInstructions from './instructions/transformHtmlInstructions';

const htmlToReactParser = new Parser(React);

/**
 * Transform HTMl to react components.
 *
 * @param {string} input
 *  HTML string.
 *
 * @return {Array<Object>}
 *  List of React components.
 */
const transformHtml = (input) => {
  const element = htmlToReactParser.parseWithInstructions(input, isNodeValid, transformHtmlInstructions);
  if (!element) {
    return [];
  }

  // If we have more then one element we filter them to remove empty string and other anomalies.
  if (element instanceof Array) {
    return element.filter(({ constructor }) => (
      constructor === Object
    ));
  }

  // Check if element is Object and is single.
  // @see function parseWithInstructions.
  if (element instanceof Object) {
    return [element];
  }

  return [];
};

export default transformHtml;
