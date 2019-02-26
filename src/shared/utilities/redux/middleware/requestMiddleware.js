import { RSAA } from 'redux-api-middleware';

// Utilities.
import isBrowser from '../../common/isBrowser';

const requestMiddleware = (store) => (next) => (action) => {

  // Only for API requests.
  const settings = action[RSAA];
  if (settings && !isBrowser) {
    const { app: { apiBaseUrl } } = store.getState();
    settings.endpoint = settings.endpoint.replace('/api/', `${apiBaseUrl}/`);
  }

  return next(action);
};

export default requestMiddleware;
