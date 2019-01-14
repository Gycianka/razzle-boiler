import { pick } from 'lodash';
import { createTransform } from 'redux-persist';

/**
 * Redux persis counter reducer transform.
 *
 * @type {Transform<any, any>}
 */
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
