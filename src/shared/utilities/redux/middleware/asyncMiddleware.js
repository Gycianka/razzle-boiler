import { RSAA } from 'redux-api-middleware';

const asyncMiddleware = () => (next) => (action) => {

  // Skip request actions.
  if (action[RSAA]) {
    return next(action);
  }

  // Make action async.
  return (async () => (next(action)))();
};

export default asyncMiddleware;
