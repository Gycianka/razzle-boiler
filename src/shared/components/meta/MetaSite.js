import React from 'react';
import Helmet from 'react-helmet';

// Constants.
import {
  MESSAGE_SITE_TITLE_TEMPLATE,
  MESSAGE_SITE_DEFAULT_TITLE,
  MESSAGE_SITE_DEFAULT_DESCRIPTION,
} from '../../constants/Messages';

const MetaSite = () => (
  <Helmet
    titleTemplate={MESSAGE_SITE_TITLE_TEMPLATE}
    defaultTitle={MESSAGE_SITE_DEFAULT_TITLE}
  >
    <meta name="description" content={MESSAGE_SITE_DEFAULT_DESCRIPTION}/>
  </Helmet>
);

export default MetaSite;
