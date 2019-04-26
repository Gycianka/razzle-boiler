/* eslint-disable react/no-danger */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

// Components.
import MetaDefault from './meta/MetaDefault';

const Template = ({
  markup,
  state,
  extractor,
}) => {

  // Helmet stuff.
  const helmet = Helmet.renderStatic();
  const htmlAttribute = helmet.htmlAttributes.toComponent();
  const bodyAttribute = helmet.bodyAttributes.toComponent();

  return (
    <html lang="en" {...htmlAttribute}>
    <head>

      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}

      <MetaDefault/>

      {extractor.getLinkElements()}
      {extractor.getStyleElements()}

    </head>

    <body {...bodyAttribute}>

    <div id="root" dangerouslySetInnerHTML={{ __html: markup }}/>

    {/* Initial state. */}
    <script id="initial-data" type="text/plain" data-json={JSON.stringify(state)}/>

    {extractor.getScriptElements()}

    </body>
    </html>
  );
};

Template.propTypes = {
  state: PropTypes.object,
  markup: PropTypes.string.isRequired,
};

export default Template;
