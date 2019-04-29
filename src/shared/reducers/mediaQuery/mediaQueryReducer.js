import { handleActions } from 'redux-actions';

// Constants.
import {
  MEDIA_QUERY_SET_VALUES,
  MEDIA_QUERY_CLASS_NAME_MOBILE,
} from '../../constants/MediaQuery';

// Utilities.
import mediaQuerySetValuesHandler from './handlers/mediaQuerySetValuesHandler';

const initialState = {
  values: {
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  },
  className: MEDIA_QUERY_CLASS_NAME_MOBILE,
};

const mediaQueryReducer = handleActions({
    [MEDIA_QUERY_SET_VALUES]: (state, action) => ({
      ...state,
      ...mediaQuerySetValuesHandler(state, action),
    }),
  },
  initialState
);

export default mediaQueryReducer;
