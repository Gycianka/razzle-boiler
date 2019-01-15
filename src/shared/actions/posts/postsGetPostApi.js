import { RSAA } from 'redux-api-middleware';

// Constants.
import {
  METHOD_GET,
  HEADER_APPLICATION_JSON,
} from '../../constants/Api';
import {
  POSTS_GET_POST_API_REQUEST,
  POSTS_GET_POST_API_SUCCESS,
  POSTS_GET_POST_API_FAILURE,
} from '../../constants/Posts';

const counterGetDataApi = () => (dispatch) => (
  dispatch({
    [RSAA]: {
      endpoint: '/api/posts/1',
      method: METHOD_GET,
      headers: HEADER_APPLICATION_JSON,
      types: [
        POSTS_GET_POST_API_REQUEST,
        POSTS_GET_POST_API_SUCCESS,
        POSTS_GET_POST_API_FAILURE,
      ],
      bailout: () => (
        false // @TODO
      ),
    },
  })
);

export default counterGetDataApi;
