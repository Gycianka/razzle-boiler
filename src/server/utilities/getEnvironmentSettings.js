// Environments.
import devEnv from '../environments/dev.env';
import prodEnv from '../environments/prod.env';
import stagingEnv from '../environments/staging.env';

// Constants.
import { DEFAULT_PORT } from '../contants/Settings';
import {
  ENVIRONMENTS_DEVELOPMENT,
  ENVIRONMENTS_PRODUCTION,
  ENVIRONMENTS_STAGING,
} from '../../shared/constants/Settings';

/**
 * Get environment settings.
 *
 * @param {string} nodeEnv
 *  Node environment.
 *
 * @return {Object}
 *  Environment settings.
 */
const getEnvironmentSettings = (nodeEnv) => {
  switch (nodeEnv) {
    case ENVIRONMENTS_DEVELOPMENT:
      return {
        env: ENVIRONMENTS_DEVELOPMENT,
        port: DEFAULT_PORT,
        ...devEnv,
      };
    case ENVIRONMENTS_PRODUCTION:
      return {
        env: ENVIRONMENTS_PRODUCTION,
        port: DEFAULT_PORT,
        ...prodEnv,
      };
    case ENVIRONMENTS_STAGING:
      return {
        env: ENVIRONMENTS_STAGING,
        port: DEFAULT_PORT,
        ...stagingEnv,
      };
    default:
      return {};
  }
};

export default getEnvironmentSettings;
