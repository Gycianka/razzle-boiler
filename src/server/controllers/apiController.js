import proxy from 'http-proxy-middleware';

// Constants.
import { API_BASE_URL } from '../contants/Settings';

/**
 * Api proxy middleware.
 *
 * @type {middleware}
 *   Api proxy middleware.
 */
const apiController = proxy({
  target: API_BASE_URL,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api/': '/',
  },
});

export default apiController;
