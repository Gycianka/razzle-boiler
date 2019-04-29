import classNames from 'classnames';

// Constants.
import {
  MEDIA_QUERY_CLASS_NAME_MOBILE,
  MEDIA_QUERY_CLASS_NAME_TABLET,
  MEDIA_QUERY_CLASS_NAME_DESKTOP,
} from '../../../constants/MediaQuery';

/**
 * Media query set values handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const mediaQuerySetValuesHandler = (state, { payload: { values } }) => ({
  values,
  className: classNames({
    [MEDIA_QUERY_CLASS_NAME_MOBILE]: values.isMobile,
    [MEDIA_QUERY_CLASS_NAME_TABLET]: values.isTablet,
    [MEDIA_QUERY_CLASS_NAME_DESKTOP]: values.isDesktop,
  }),
});

export default mediaQuerySetValuesHandler;
