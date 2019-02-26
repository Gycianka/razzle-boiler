import { keyBy } from 'lodash';

// Utilities.
import transformApiStatusSuccess from '../../../utilities/transform/api/transformApiStatusSuccess';

/**
 * Posts get posts api success handler.
 *
 * @param {Object} state
 *  State object.
 * @param {Object} action
 *  Action object.
 *
 * @return {Object}
 *  Updated state.
 */
const postsGetPostsApiSuccessHandler = (state, { payload }) => ({
  items: {
    ...state.items,
    ...keyBy(payload, 'id'),
  },
  status: transformApiStatusSuccess(),
  hasAllItems: true,
});

export default postsGetPostsApiSuccessHandler;
