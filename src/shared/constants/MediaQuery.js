// Actions.
export const MEDIA_QUERY_SET_VALUES = 'MEDIA_QUERY_SET_VALUES';

// Breakpoint.
export const MEDIA_QUERY_BREAK_POINT_X_SMALL = 360;
export const MEDIA_QUERY_BREAK_POINT_SMALL = 600;
export const MEDIA_QUERY_BREAK_POINT_MEDIUM = 768;
export const MEDIA_QUERY_BREAK_POINT_LARGE = 1024;
export const MEDIA_QUERY_BREAK_POINT_FULL = 1280;
export const MEDIA_QUERY_BREAK_POINT_X_LARGE = 1450;

// Class names.
export const MEDIA_QUERY_CLASS_NAME_MOBILE = 'bp__mobile';
export const MEDIA_QUERY_CLASS_NAME_TABLET = 'bp__tablet';
export const MEDIA_QUERY_CLASS_NAME_DESKTOP = 'bp__desktop';

// Media query mapping.
export const MEDIA_QUERY_MAPPING = {
  isMobile: {
    minWidth: undefined,
    maxWidth: MEDIA_QUERY_BREAK_POINT_SMALL,
  },
  isTablet: {
    minWidth: MEDIA_QUERY_BREAK_POINT_SMALL + 1,
    maxWidth: MEDIA_QUERY_BREAK_POINT_MEDIUM,
  },
  isDesktop: {
    minWidth: MEDIA_QUERY_BREAK_POINT_MEDIUM + 1,
    maxWidth: undefined,
  },
};
