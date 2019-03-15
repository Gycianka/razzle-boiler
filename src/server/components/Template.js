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
  state,
  scriptChunks,
  stylesChunks,
}) => {

  // Helmet stuff.
  const helmet = Helmet.renderStatic();
  const htmlAttribute = helmet.htmlAttributes.toComponent();
  const bodyAttribute = helmet.bodyAttributes.toComponent();

  // Check node environment.
  const isProd = process.env.NODE_ENV === ENVIRONMENTS_PRODUCTION;

  return (
    <html lang="en" {...htmlAttribute}>
    <head>

      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}

      <MetaDefault/>

      {assets.client.css && <link rel="stylesheet" href={assets.client.css}/>}

      {map(stylesChunks, (chunk, key) => (
        <link key={key} href={chunk.publicPath} rel="stylesheet"/>
      ))}

    </head>

    <body {...bodyAttribute}>

    <div id="root" dangerouslySetInnerHTML={{ __html: markup }}/>

    {/* Initial state. */}
    <script id="initial-data" type="text/plain" data-json={JSON.stringify(state)}/>

    {isProd ?
      <script src={assets.client.js}/> :
      <script src={assets.client.js} crossOrigin="true"/>
    }

    {map(scriptChunks, (chunk, key) => (
      isProd ?
        <script key={key} src={chunk.publicPath}/> :
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
  scriptChunks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired,
      publicPath: PropTypes.string.isRequired,
    }),
  ),
  stylesChunks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired,
      publicPath: PropTypes.string.isRequired,
    }),
  ),
};

export default Template;
