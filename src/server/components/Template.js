import React from 'react';
import { map } from 'lodash';

// Constants.
import {
  ENVIRONMENTS_PRODUCTION,
} from '../../shared/constants/Settings';

const Template = ({
  assets,
  markup,
  chunks,
}) => (
  <html lang="en">
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta charSet='utf-8'/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <title>Welcome to Razzle Boilerplate</title>

    {assets.client.css && <link rel="stylesheet" href={assets.client.css}/>}

  </head>

  <body>

  <div id="root" dangerouslySetInnerHTML={{ __html: markup }}/>

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

export default Template;
