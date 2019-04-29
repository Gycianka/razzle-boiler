import { createAction } from 'redux-actions';
import { isEqual } from 'lodash';

// Constants.
import { MEDIA_QUERY_SET_VALUES } from '../../constants/MediaQuery';

const mediaQuerySetValuesState = createAction(MEDIA_QUERY_SET_VALUES);
const mediaQuerySetValues = ({ values }) => (dispatch, getState) => {

  // We should ignore any useless state change.
  const { mediaQuery } = getState();
  if (isEqual(values, mediaQuery.values)) {
    return new Promise((resolve) => {
      resolve();
    });
  }

  return dispatch(mediaQuerySetValuesState({ values }));
};

export default mediaQuerySetValues;
