import React from 'react';
import { ProcessNodeDefinitions } from 'html-to-react';

// Instructions.
import transformHtmlInstructionsLink from './transformHtmlInstructionsLink';
import transformHtmlInstructionsDefault from './transformHtmlInstructionsDefault';

// Get React process node definitions.
const processNodeDefinitions = new ProcessNodeDefinitions(React);

/**
 * Get transform html instructions.
 *
 * @type {Array<Object>}
 *  Html transform instructions.
 */
const transformHtmlInstructions = [
  transformHtmlInstructionsLink(),
  transformHtmlInstructionsDefault(processNodeDefinitions.processDefaultNode),
];

export default transformHtmlInstructions;
