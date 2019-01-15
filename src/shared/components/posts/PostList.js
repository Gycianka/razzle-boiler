import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

// Components.
import PostItem from './PostItem';

const PostList = ({
  items,
}) => (
  <ul>
    {map(items, (item, key) => (
      <li key={key}>
        <PostItem {...item}/>
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default PostList;
