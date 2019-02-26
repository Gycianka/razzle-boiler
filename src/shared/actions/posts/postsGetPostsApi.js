import { RSAA } from 'redux-api-middleware';

// Constants.
import {
  METHOD_GET,
  HEADER_APPLICATION_JSON,
} from '../../constants/Api';
import {
  POSTS_GET_POSTS_API_REQUEST,
  POSTS_GET_POSTS_API_SUCCESS,
  POSTS_GET_POSTS_API_FAILURE,
} from '../../constants/Posts';

const postsGetPostsApi = () => (dispatch) => (
  dispatch({
    [RSAA]: {
      endpoint: '/api/posts',
      method: METHOD_GET,
      headers: HEADER_APPLICATION_JSON,
      types: [
        POSTS_GET_POSTS_API_REQUEST,
        POSTS_GET_POSTS_API_SUCCESS,
        POSTS_GET_POSTS_API_FAILURE,
      ],
      bailout: ({ posts: { hasAllItems } }) => (hasAllItems),
    },
  })
);

export default postsGetPostsApi;
