import { handleActions } from 'redux-actions';

// Utilities.
import postsGetPostApiRequestHandler from './handlers/postsGetPostApiRequestHandler';
import postsGetPostApiSuccessHandler from './handlers/postsGetPostApiSuccessHandler';
import postsGetPostApiFailureHandler from './handlers/postsGetPostApiFailureHandler';
import postsGetPostsApiRequestHandler from './handlers/postsGetPostsApiRequestHandler';
import postsGetPostsApiSuccessHandler from './handlers/postsGetPostsApiSuccessHandler';
import postsGetPostsApiFailureHandler from './handlers/postsGetPostsApiFailureHandler';

// Constants.
import transformApiInitialStatus from '../../utilities/transform/api/transformApiInitialStatus';
import {
  POSTS_GET_POST_API_REQUEST,
  POSTS_GET_POST_API_SUCCESS,
  POSTS_GET_POST_API_FAILURE,
  POSTS_GET_POSTS_API_REQUEST,
  POSTS_GET_POSTS_API_SUCCESS,
  POSTS_GET_POSTS_API_FAILURE,
} from '../../constants/Posts';

/**
 * Initial reducer state.
 *
 * @type {Object}
 */
const initialState = {
  status: transformApiInitialStatus,
  items: {},
  hasAllItems: false,
};

/**
 * Action handler.
 *
 * @type {Function}
 */
const postsReducer = handleActions({
  [POSTS_GET_POST_API_REQUEST]: (state, action) => ({
    ...state,
    ...postsGetPostApiRequestHandler(state, action),
  }),
  [POSTS_GET_POST_API_SUCCESS]: (state, action) => ({
    ...state,
    ...postsGetPostApiSuccessHandler(state, action),
  }),
  [POSTS_GET_POST_API_FAILURE]: (state, action) => ({
    ...state,
    ...postsGetPostApiFailureHandler(state, action),
  }),
  [POSTS_GET_POSTS_API_REQUEST]: (state, action) => ({
    ...state,
    ...postsGetPostsApiRequestHandler(state, action),
  }),
  [POSTS_GET_POSTS_API_SUCCESS]: (state, action) => ({
    ...state,
    ...postsGetPostsApiSuccessHandler(state, action),
  }),
  [POSTS_GET_POSTS_API_FAILURE]: (state, action) => ({
    ...state,
    ...postsGetPostsApiFailureHandler(state, action),
  }),
}, initialState);

export default postsReducer;
