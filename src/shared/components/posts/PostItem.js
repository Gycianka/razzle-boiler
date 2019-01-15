import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PostItem = ({
  id,
  title,
  body,
}) => (
  <div>
    <Link to={`/post/${id}`}>{title}</Link>
    <p>{body}</p>
  </div>
);

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostItem;
