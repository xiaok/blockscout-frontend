import type { Feature } from './types';

import apis from '../apis';
import { getEnvValue } from '../utils';

const title = 'Name service integration';

const config: Feature<{ isLookupEnabled: boolean }> = (() => {
  if (apis.bens) {
    return Object.freeze({
      title,
      isEnabled: true,
      isLookupEnabled: getEnvValue('NEXT_PUBLIC_NAME_SERVICE_LOOKUP_ENABLED') !== 'false',
    });
  }

  return Object.freeze({
    title,
    isEnabled: false,
  });
})();

export default config;
