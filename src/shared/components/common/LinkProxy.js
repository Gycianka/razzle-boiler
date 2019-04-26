import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Utilities.
import isUrlRelative from '../../utilities/common/isUrlRelative';

const LinkProxy = ({
  href,
  children,
}) => (
  isUrlRelative(href) ? (
    <Link to={href}>{children}</Link>
  ) : (
    <a href={href}>{children}</a>
  )
);

LinkProxy.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default LinkProxy;
