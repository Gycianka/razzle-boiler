import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const MetaPage = ({
  title,
  description,
}) => (
  <Helmet>

    <title>{title}</title>

    {description &&
    <meta name="description" content={description}/>
    }

  </Helmet>
);

MetaPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default MetaPage;
