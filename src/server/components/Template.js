/* eslint-disable react/no-danger */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { map } from 'lodash';

// Components.
import MetaDefault from './meta/MetaDefault';

// Constants.
import { ENVIRONMENTS_PRODUCTION } from '../../shared/constants/Settings';

const Template = ({
  assets,
  markup,
  chunks,
  state,
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

      {assets.client.css && <link rel="stylesheet" href={assets.client.css}/>}

    </head>

    <body {...bodyAttribute}>

    <div id="root" dangerouslySetInnerHTML={{ __html: markup }}/>

    {/* Initial state. */}
    <script id="initial-data" type="text/plain" data-json={JSON.stringify(state)}/>

    {process.env.NODE_ENV === ENVIRONMENTS_PRODUCTION ?
      <script src={assets.client.js}/> :
      <script src={assets.client.js} crossOrigin="true"/>
    }

    {map(chunks, (chunk, key) => (
      process.env.NODE_ENV === ENVIRONMENTS_PRODUCTION ?
        <script key={key} src={chunk.file}/> :
        <script key={key} src={`http://${process.env.HOST}:${parseInt(process.env.PORT, 10) + 1}/${chunk.file}`}/>
    ))}

    <script>window.main();</script>

    </body>
    </html>
  );
};

Template.propTypes = {
  state: PropTypes.object,
  markup: PropTypes.string.isRequired,
  chunks: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string.isRequired,
    }),
  ),
  assets: PropTypes.shape({
    client: PropTypes.shape({
      js: PropTypes.string.isRequired,
      css: PropTypes.string,
    }),
  }),
};

export default Template;
