/* eslint-disable no-console */

import express from 'express';

// Constants
import { settings } from './server';

// Server port.
const { port } = settings;

// Replaceable server instance.
let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });

  console.info('✅  Server-side HMR Enabled!');
}

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`> Started on port ${port}`);
  });
