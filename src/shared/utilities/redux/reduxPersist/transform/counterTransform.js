import { pick } from 'lodash';
import { createTransform } from 'redux-persist';

const counterTransform = createTransform(
  (inboundState) => pick(inboundState, ['count']),
  (outboundState) => outboundState,
  {
    whitelist: [
      'counter',
    ],
  },
);

export default counterTransform;
