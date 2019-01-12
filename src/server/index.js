// Server.
import express from 'express';
import compression from 'compression';

// React loadable.
import stats from '../../build/react-loadable.json';

// Controllers.
import mainController from './controllers/mainController';
import apiController from './controllers/apiController';

// Razzle assets.
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.disable('x-powered-by');

server.use(compression());
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR, {
  maxAge: '30d',
}));

server.use('/api/*', apiController);
server.get('/*', mainController(assets, stats));

export default server;
