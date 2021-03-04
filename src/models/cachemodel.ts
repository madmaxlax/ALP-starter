import { InMemoryCache } from '@apollo/client';

export const cacheMoney: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Character: {
      fields: {
        gender: {
          read(val = 'maxdefault') {
            return val === 'unknown' ? '¯\\_(ツ)_/¯' : val;
          },
        },
      },
    },
  },
});
