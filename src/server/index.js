// Server.
import express from 'express';
import compression from 'compression';


// Controllers.
import mainController from './controllers/mainController';
import apiController from './controllers/apiController';

// Utilities.
import getEnvironmentSettings from './utilities/getEnvironmentSettings';

// Razzle assets.
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

// Exposed settings.
export const settings = getEnvironmentSettings(process.env.NODE_ENV);

const server = express();

server.disable('x-powered-by');

server.use(compression());
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR, {
  maxAge: '30d',
}));

server.use('/api/*', apiController);
server.get('/*', mainController({ assets, settings }));

export default server;
