import { RSAA } from 'redux-api-middleware';

// Constants.
import {
  METHOD_GET,
  HEADER_APPLICATION_JSON,
} from '../../constants/Api';
import {
  COUNTER_GET_DATA_API_REQUEST,
  COUNTER_GET_DATA_API_SUCCESS,
  COUNTER_GET_DATA_API_FAILURE,
} from '../../constants/Counter';

const counterGetDataApi = () => (dispatch) => (
  dispatch({
    [RSAA]: {
      endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
      method: METHOD_GET,
      headers: HEADER_APPLICATION_JSON,
      types: [
        COUNTER_GET_DATA_API_REQUEST,
        COUNTER_GET_DATA_API_SUCCESS,
        COUNTER_GET_DATA_API_FAILURE,
      ],
      bailout: ({ counter: { apiData } }) => (
        apiData !== undefined
      ),
    },
  })
);

export default counterGetDataApi;
