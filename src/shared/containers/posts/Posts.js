import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Components.
import PostList from '../../components/posts/PostList';
import MetaPage from '../../components/meta/MetaPage';

// Constants.
import { MESSAGE_ERROR_FAILED_TO_FETCH_DATA } from '../../constants/Messages';

const Posts = ({
  items,
  status,
}) => (
  <div>

    <MetaPage title="Counter"/>

    <h1>Posts</h1>

    {status.isError ? (
      <p>{MESSAGE_ERROR_FAILED_TO_FETCH_DATA}</p>
    ) : (
      <PostList items={items}/>
    )}

  </div>
);

Posts.propTypes = {
  items: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired,
};

const mapStateToProps = ({ posts: { status, items } }) => ({
  items,
  status,
});

export default compose(
  connect(mapStateToProps),
)(Posts);
